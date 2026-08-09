import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

export function Figure({ src, alt, caption, priority = false }: FigureProps) {
  return (
    <figure className="figure">
      <div className="figure-frame">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          priority={priority}
          sizes="(max-width: 900px) 100vw, 72rem"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
