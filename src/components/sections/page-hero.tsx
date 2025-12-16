interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-forest-green-deep)] pt-32 lg:pt-48 pb-12 lg:pb-20 relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-[var(--max-width-content)] mx-auto px-8 relative z-[1] text-center">
        <div className="section-label text-[rgba(255,255,255,0.7)]">
          [ {label} ]
        </div>
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.2] text-[var(--color-off-white)] mb-6">
          {title}
        </h1>
        <p className="text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed text-[rgba(255,255,255,0.9)] max-w-[800px] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
