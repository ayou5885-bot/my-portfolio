interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}
