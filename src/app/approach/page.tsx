import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileSearch,
  Shield,
  TrendingUp,
  Handshake,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Learn about our community-led conservation approach - combining traditional governance with modern science for effective marine protection.",
};

const principles = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Local communities lead decision-making. We follow rigorous Free, Prior and Informed Consent (FPIC) protocols, ensuring genuine ownership rather than token participation.",
  },
  {
    icon: FileSearch,
    title: "Evidence-Based",
    description:
      "Quarterly monitoring tracks coral health, fish biomass, and species diversity. We adapt our approach based on what the data tells us, not assumptions.",
  },
  {
    icon: Shield,
    title: "Traditional Governance",
    description:
      "We integrate adat (customary law) and sasi (seasonal closures) with modern MPA structures. Traditional systems aren't obstacles—they're foundations.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Financing",
    description:
      "We build diverse revenue streams—ecotourism, sustainable fishing licensing, carbon credits—so conservation continues after external funding ends.",
  },
  {
    icon: Handshake,
    title: "Benefit Sharing",
    description:
      "Conservation must improve livelihoods. Revenue sharing ensures communities see tangible benefits from protection, creating positive incentives.",
  },
  {
    icon: Scale,
    title: "Transparent Governance",
    description:
      "MPA Committee includes community representatives, traditional leaders, and technical advisors. All decisions are documented and publicly shared.",
  },
];

const methodology = [
  {
    phase: "Phase 1",
    title: "Community Engagement",
    description:
      "Build relationships with traditional leaders and communities. Conduct FPIC consultations across all affected villages. Document traditional knowledge and governance systems.",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Baseline Assessment",
    description:
      "Scientific surveys of coral reef health, fish populations, and key species. GPS mapping of boundaries and zones. Community resource mapping workshops.",
    status: "Completed",
  },
  {
    phase: "Phase 3",
    title: "Governance Framework",
    description:
      "Establish MPA Committee with community representation. Define zones (no-take, sustainable use, buffer). Create patrol protocols and enforcement procedures.",
    status: "In Progress",
  },
  {
    phase: "Phase 4",
    title: "Implementation",
    description:
      "Deploy ranger patrols and monitoring systems. Establish base camp operations. Begin quarterly scientific monitoring. Launch community benefit programs.",
    status: "Starting October 2025",
  },
  {
    phase: "Phase 5",
    title: "Monitoring & Adaptation",
    description:
      "Track ecosystem recovery and compliance rates. Adjust management based on data. Expand successful programs. Share learnings with other communities.",
    status: "Ongoing",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        label="OUR APPROACH"
        title="Community-Led Conservation"
        subtitle="Combining traditional governance with modern science for effective, lasting marine protection"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className=" mb-6">
              Why Community-Led?
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              Traditional top-down Marine Protected Areas often fail because
              they exclude the very people whose cooperation is essential for
              success. When communities feel alienated from conservation
              decisions, compliance drops and conflict rises.
            </p>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              Our approach inverts this model. Communities aren&apos;t
              stakeholders to be consulted—they&apos;re leaders to be supported.
              By building on existing traditional governance systems and
              ensuring genuine decision-making power, we create MPAs that
              communities actively protect because they own them.
            </p>

            <h2 className=" mt-12 mb-8">
              Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-[var(--color-cream)] p-8 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className=" mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-base text-[var(--color-gray)] m-0">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <h2 className=" mt-12 mb-8">
              Our Methodology
            </h2>
            <div className="flex flex-col gap-6 my-8">
              {methodology.map((step, index) => (
                <div
                  key={index}
                  className="p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-navy-accent)] rounded"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-sm font-semibold text-[var(--color-navy-accent)] uppercase tracking-wide">
                      {step.phase}
                    </span>
                    <span className="text-sm px-3 py-1 bg-[var(--color-forest-green)] text-white rounded-full">
                      {step.status}
                    </span>
                  </div>
                  <h3 className=" mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-gray)] m-0">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-12">
              <h3 className="text-center mb-4">
                Learn More About Our Work
              </h3>
              <p className="text-center text-lg text-[var(--color-gray)] mb-6">
                See how we&apos;re putting these principles into practice in
                Misool, Raja Ampat.
              </p>
              <Button variant="cta" size="md" asChild>
                <Link href="/project">View Project Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
