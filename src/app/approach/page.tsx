import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Approach } from "@/components/sections/approach";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Learn about our community-led conservation approach - combining traditional governance with modern science for effective marine protection.",
};

const methodology = [
  {
    phase: "Phase 1",
    title: "Community Engagement",
    description:
      "Build relationships with traditional leaders and communities. Conduct FPIC consultations across all affected villages. Document traditional knowledge and governance systems.",
    status: "Ongoing",
  },
  {
    phase: "Phase 2",
    title: "Baseline Assessment",
    description:
      "Scientific surveys of coral reef health, fish populations, and key species. GPS mapping of boundaries and zones. Community resource mapping workshops.",
    status: "Planning",
  },
  {
    phase: "Phase 3",
    title: "Governance Framework",
    description:
      "Establish MPA Committee with community representation. Define zones (no-take, sustainable use, buffer). Create patrol protocols and enforcement procedures.",
    status: "Planning",
  },
  {
    phase: "Phase 4",
    title: "Implementation",
    description:
      "Deploy ranger patrols and monitoring systems. Establish base camp operations. Begin quarterly scientific monitoring. Launch community benefit programs.",
    status: "Planning",
  },
  {
    phase: "Phase 5",
    title: "Monitoring & Adaptation",
    description:
      "Track ecosystem recovery and compliance rates. Adjust management based on data. Expand successful programs. Share learnings with other communities.",
    status: "Planning",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        label="OUR APPROACH"
        title={<>Science-Based<br />Community-Led Conservation</>}
        subtitle="Combining traditional governance with modern science for effective, lasting marine protection"
      />

      {/* Hero Image */}
      <section className="bg-[var(--color-off-white)] pt-8 lg:pt-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <Image
              src="/west-papua-care/images/approach.jpg"
              alt="Community members working together in the jungle"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Why Community-Led Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <h2 className="mb-8">Why Community-Led?</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Traditional top-down Marine Protected Areas often fail because
            they exclude the very people whose cooperation is essential for
            success. When communities feel alienated from conservation
            decisions, compliance drops and conflict rises.
          </p>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Our approach inverts this model. Communities aren&apos;t
            stakeholders to be consulted. They&apos;re leaders to be supported.
            By building on existing traditional governance systems and
            ensuring genuine decision-making power, we create MPAs that
            communities actively protect because they own them.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <Approach />

      {/* Methodology Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <h2 className="mb-8">Our Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {methodology.map((step, index) => (
              <div
                key={index}
                className={`p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-navy-accent)] rounded ${index === methodology.length - 1 ? 'md:col-span-2 md:max-w-[calc(50%-12px)]' : ''}`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="text-sm font-semibold text-[var(--color-navy-accent)] uppercase tracking-wide">
                    {step.phase}
                  </span>
                  <span className="text-sm px-3 py-1 bg-[var(--color-forest-green)] text-white rounded-full">
                    {step.status}
                  </span>
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-[var(--color-gray)] m-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-16 flex flex-col items-center justify-center gap-4 text-balance">
            <h3 className="text-center mb-4">Learn More About Our Work</h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              See how we&apos;re putting these principles into practice in
              Misool, Raja Ampat.
            </p>
            <Button variant="cta" size="md" asChild>
              <Link href="/project">View Project Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
