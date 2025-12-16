import { cn } from "@/lib/utils";

interface MethodologyStep {
  phase: string;
  title: string;
  description: string;
  status: string;
}

interface MethodologySectionProps {
  steps: MethodologyStep[];
  className?: string;
}

export function MethodologySection({
  steps,
  className,
}: MethodologySectionProps) {
  return (
    <section className={cn("py-16 lg:py-24 bg-[var(--color-off-white)]", className)}>
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="section-label text-[var(--color-gray)]">
            [ OUR METHODOLOGY ]
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[var(--color-charcoal)] mb-12">
            How We Work
          </h2>

          <div className="relative">
            {/* Vertical line connecting phases */}
            <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-[var(--color-burnt-orange)]/20 hidden md:block" />

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Phase indicator */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-burnt-orange)] text-white flex items-center justify-center font-semibold text-sm z-10">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-burnt-orange)] rounded">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                        {step.phase}
                      </span>
                      <span
                        className={cn(
                          "text-sm px-3 py-1 rounded-full",
                          step.status === "Completed"
                            ? "bg-[var(--color-forest-green)] text-white"
                            : step.status === "In Progress"
                            ? "bg-[var(--color-burnt-orange)] text-white"
                            : "bg-[var(--color-gray)] text-white"
                        )}
                      >
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-gray)] m-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
