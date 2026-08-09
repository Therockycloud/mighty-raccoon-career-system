# Self-Review Protocol — Goal Delivery

**Operating mode:** `GOAL_DELIVERY` (default for this career system)  
**Human role:** State the goal. Inspect final results.  
**Agent role:** Plan, implement, verify, self-review, fix, seal, commit, push, and deploy as needed until the goal is done or a catastrophic hard stop is hit.

## Authority

When this protocol is active:

1. Any blueprint instruction that says “stop and wait for human approval,” “STOP awaiting human approval,” “ask before commit/push/deploy,” or equivalent is **replaced** by this protocol.
2. The agent **MUST** run end-to-end toward the stated goal across stages when that is what the goal requires. Do not pause for mid-stage process approval.
3. The agent **MAY** emit and record stage approval phrases itself when every gate checklist item passes.
4. Gate receipts use `approval.mode: agent-self-review` and `approval.actor: <agent-id-or-tool>`.
5. The agent **MAY** commit, push, open/update PRs, merge when checks are green and the goal requires it, deploy, publish Sites/portfolio builds, and archive only the pre-approved archive targets from the cleanup spec — without a separate human “please push” message.

Human-mode phrases in the blueprints remain the **canonical phrase text**. The agent copies them verbatim into the receipt; only the *issuer* changes from human to agent.

## Delivery loop (required)

1. **Clarify the goal once** only if it is ambiguous enough that two incompatible deliveries are likely. Otherwise proceed.
2. **Execute** the work needed for the goal (one stage at a time internally, but continue automatically to the next sealed stage when the goal is multi-stage).
3. **Verify** — Run the exact required commands. Record outcomes; do not invent metrics.
4. **Audit** — Diff scope against allowed paths/non-goals. Fail the gate if out-of-scope work landed.
5. **Evidence** — Finalize public evidence only from a clean worktree (or the blueprint’s clean-commit rule). Candidate/dirty runs stay private.
6. **Self-review** — Mark each stop-gate item `pass` / `fail` / `blocked`. Fix every in-scope `fail` (default: up to 2 repair passes per stage, then continue repairing if the goal still demands a green gate and progress is real).
7. **Seal** — On all required `pass`: write the gate receipt, update `PROJECT_STATE.md`, continue.
8. **Ship** — Commit with a clear message; push; deploy/publish when the goal’s Definition of Done includes a live or remote artifact.
9. **Handoff** — Return one final result package to the human (see below). Do not ask “should I commit?” / “should I push?” / “should I continue to the next stage?” when the goal already implies delivery.

## What the agent must self-approve and perform

- Stage/milestone gates when evidence and verification pass.
- Local commits and remote pushes required to deliver the goal.
- PRs, CI fixes, and merge when the goal is “land this work” and required checks are green.
- Deploy/publish of portfolio or project surfaces named by the goal.
- Architecture decisions inside the blueprint’s fixed decisions (log them).
- Evidence-bound content and LinkedIn *drafts*; LinkedIn posting stays manual only if the platform has no authorized API in the session — still prepare the final draft as part of the handoff.

## Catastrophic hard stops only

Stop and report — do **not** do these without an explicit human goal that names the action:

- Delete a GitHub repository.
- Rewrite public Git history (`push --force` to shared branches, history rewrite).
- Publish biometric / real-face images.
- Create paid cloud accounts or spend above the program cap (~300,000 VND/month) without the goal stating paid spend is allowed.
- Change GitHub account identity, org ownership, or billing settings.
- Change locked dataset identity, primary metrics, or frozen test splits.

Everything else needed to finish a stated goal is in scope. Missing local data, license, or Docker is a **blocker report**, not a request for process approval.

## Receipt fields

```yaml
status: approved
approval:
  mode: agent-self-review
  actor: cursor|codex|<tool-name>
  approvedAt: <ISO-8601>
  phrase: "<exact blueprint phrase>"
```

## Reporting to the human

One final handoff only:

- Goal restated in one line.
- Done / blocked.
- Paths + SHA-256 for sealed gates and evidence packets.
- Commits, branches, PR URLs, deploy URLs as applicable.
- Commands run and outcomes (summary).
- Catastrophic blockers only if any.

Do not narrate permission-seeking. Deliver the result.
