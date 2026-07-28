# Evidence Packet Specification

An evidence packet is the machine-readable and human-reviewable source for public technical claims.

## Required structure

```text
evidence/<project-or-article-slug>/
├── packet.yaml
├── claims.yaml
├── metrics/
│   └── run-manifest.yaml
├── diagrams/
├── screenshots/
└── notes/
```

## `packet.yaml`

```yaml
schemaVersion: 1
id: stable-id
title: string
project: owner/repository
ref: full-commit-sha-or-release-tag
capturedAt: YYYY-MM-DD
capturedBy: string
licenseNotes: string
commands:
  - command: exact reproducible command
    purpose: string
artifacts:
  - path: claims.yaml
    sha256: lowercase-hex
    purpose: claim-ledger-integrity
  - path: relative/path
    sha256: lowercase-hex
    purpose: string
```

## `claims.yaml`

```yaml
schemaVersion: 1
claims:
  - id: stable-claim-id
    claim: string
    status: verified | planned | rejected
    source:
      repository: owner/repository
      ref: full-commit-sha-or-release-tag
      path: relative/path
      command: optional-command
    verifiedAt: YYYY-MM-DD
    notes: string
```

## Rules

- Dirty-tree candidate runs stay in a Git-ignored project artifact directory and are not Evidence Packets.
- `packet.yaml.ref` must resolve to a clean immutable commit or release; `HEAD`, a branch name, or `HEAD + diff` is invalid.
- `packet.yaml.artifacts` must include `claims.yaml` and its SHA-256. Because the
  gate receipt hashes `packet.yaml`, this creates a transitive integrity link from
  receipt → packet → claim ledger. Changing a claim requires a new packet and gate.
- `verified` requires an immutable ref and inspectable artifact or reproduction command.
- `planned` must be worded publicly as planned, building, or in progress.
- `rejected` is retained for audit but never rendered publicly.
- Metrics include units, dataset/split, aggregation, and uncertainty when available.
- Screenshots are supporting evidence, never the only evidence for a metric.
- Personal data, credentials, private datasets, and biometric samples are forbidden.
- Generated content may paraphrase a verified claim but may not strengthen it.
- A changed claim requires a new verification date and evidence ref.

## Run-manifest contract

Candidate runs first write to the Git-ignored candidate root declared by the
project blueprint, conventionally
`artifacts/candidate/<stage>/<run-id>/run-manifest.yaml` (GroundedVN uses the
equivalent `artifacts/private/**` namespace). After a clean immutable source
commit is checked out and the accepted verification is reproduced, copy the
reviewed manifest to `evidence/<project-stage>/metrics/run-manifest.yaml`.

The reviewed manifest must record:

- source commit and clean-worktree check;
- exact command, configuration path and SHA-256;
- dependency-lock SHA-256;
- input dataset/split fingerprints;
- start/end timestamps and run status;
- deterministic seed or an explicit non-determinism note;
- every accepted output path, SHA-256, unit, and evaluation slice;
- environment summary and any failure or exclusion.

`rawRunManifestSha256` in a gate receipt is the SHA-256 of this reviewed,
public-safe manifest—not a private raw dataset, log dump, or dirty-tree candidate
directory.

## Accepted artifact contract

Every approved stage identifies one accepted subject manifest. It may describe a
model, index, publisher, report, dataset, or release. The manifest must contain its
kind, stable ID, source commit, configuration hash, artifact hashes, compatibility
contract, and creation command. `accepted.artifactOrPublisherPath` points to that
manifest and `accepted.artifactOrPublisherSha256` hashes its exact bytes.

## Gate receipt and chain contract

- Start from `GATE_RECEIPT_TEMPLATE.yaml`; `pending` is the safe default.
- Validate the completed YAML against `GATE_RECEIPT_SCHEMA.json`.
- Every path in a receipt, packet, claim, run manifest, or accepted-subject
  manifest is a repository-relative POSIX path. Absolute paths, backslashes,
  `.`/`..` traversal segments, URI schemes, and symlinks that resolve outside
  the repository are invalid. Before reading or hashing, the verifier resolves
  the path and proves it remains below the repository root.
- Copy the approved blueprint into the implementation repository and record that
  repository-relative snapshot path and hash. A receipt never depends on an
  external local absolute path.
- Sequence `0` is the genesis receipt and has a null `previousReceipt`.
- Every sequence above `0` records the repository-relative path and SHA-256 of the
  previous stage’s final approved receipt.
- The source commit must be clean and must be an ancestor of the later
  evidence/gate commit.
- The complete diff after the source commit may touch only
  `source.allowedPostSourcePaths`.
- Recompute and verify the packet, run-manifest, configuration, accepted-subject,
  blueprint, project-state, dependency-lock, and previous-receipt hashes.
- `status: approved` is valid only after the named human reviewer verifies the
  evidence and records an ISO 8601 timestamp and exact approval phrase.
- Commit the final approved receipt. The next receipt hashes this committed file;
  never edit an old approved receipt in place.

Schema validation checks shape and formats. A repository gate verifier must also
check file existence, byte hashes, Git ancestry, clean-source status, allowed-path
diffs, stage order, and project-specific metric gates.

`source.allowedPostSourcePaths` is not a caller-selected glob dialect. Version 1
accepts only these literals, interpreted by the verifier as follows:

| Literal | Exact interpretation |
|---|---|
| `evidence/**` | A non-symlink path whose normalized repository-relative name begins `evidence/` |
| `docs/gates/**` | A non-symlink path whose normalized repository-relative name begins `docs/gates/` |
| `PROJECT_STATE.md` | Exactly the root file `PROJECT_STATE.md` |

The verifier examines every added, copied, modified, renamed, or deleted path in
`source.commit..HEAD`, rejects untracked files during final approval, and rejects a
path not matched by those literal rules. It must not delegate matching to shell
expansion or platform-dependent glob libraries.
