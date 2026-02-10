import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Track the measurable outcomes of our community-led marine conservation in Raja Ampat - from ecosystem health to community benefits.",
};

const impactStats = [
  { value: "250 km²", label: "Marine area under community protection" },
  { value: "10+", label: "Villages with strong consensus" },
  { value: "15", label: "Monitoring sites planned" },
];

const fiveYearTargets = [
  {
    value: "9,000",
    unit: "Hectares",
    label: "Protected",
    description:
      "Complete protection for coral reef ecosystems within no-take boundaries",
  },
  {
    value: "50%",
    unit: "",
    label: "Fish Biomass Increase",
    description: "Target based on regional MPA performance data",
  },
  {
    value: "60%",
    unit: "",
    label: "Live Coral Cover",
    description:
      "Maintenance through elimination of destructive fishing practices",
  },
  {
    value: "90%",
    unit: "",
    label: "Compliance Rate",
    description: "With no-take zone regulations through community enforcement",
  },
  {
    value: "20+",
    unit: "",
    label: "Patrol Days Monthly",
    description: "Demonstrating sustained community engagement",
  },
  {
    value: "",
    unit: "",
    label: "Flagship Species Recovery",
    description:
      "Documented recovery of groupers, sharks, turtles, Napoleon wrasse, and Bumphead parrotfish",
  },
];

const expectedOutcomes = [
  {
    title: "Ecosystem Recovery",
    items: [
      "50% increase in fish biomass within 5 years",
      "Stabilization of coral cover",
      "Recovery of key species populations (Napoleon wrasse, sea turtles, sharks)",
      "Reduced destructive fishing incidents",
    ],
  },
  {
    title: "Community Benefits",
    items: [
      "Sustainable livelihood opportunities through ecotourism",
      "Revenue sharing from MPA user fees",
      "Strengthened traditional governance recognition",
      "Skills development and employment for rangers",
    ],
  },
  {
    title: "Knowledge & Replication",
    items: [
      "Documented methodology for community-led MPAs",
      "Training materials in local languages",
      "Case study for other Coral Triangle communities",
      "Scientific publications on ecosystem recovery",
    ],
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        label="IMPACT FRAMEWORK"
        title={<>Rooted in Marine Protection<br />Empowering Local Guardians</>}
        subtitle="Driving measurable outcomes for ecosystems and communities"
      />

      {/* Hero Image */}
      <section className="bg-[var(--color-off-white)] pt-8 lg:pt-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <Image
              src="/images/impact.jpg"
              alt="Community members in West Papua village"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <h2 className="mb-8">Current Status</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            We are in the final stages of preparation before full
            implementation in the year of 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg text-center"
              >
                <div className="font-[var(--font-family-heading)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-navy-accent)] mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-[var(--color-gray)] leading-[1.5]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-16 mb-8">Our Project Targets</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Measurable conservation outcomes based on regional MPA performance
            data:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {fiveYearTargets.map((target, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg"
              >
                <div className="font-[var(--font-family-heading)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-navy-accent)] mb-2">
                  {target.value}
                  {target.unit && (
                    <span className="text-lg font-normal ml-1">
                      {target.unit}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg">{target.label}</h3>
                <p className="text-sm text-[var(--color-gray)] m-0">
                  {target.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 mb-8">Project Key Objectives</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {expectedOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg"
              >
                <h3 className="mb-4">{outcome.title}</h3>
                <ul className="list-none p-0 m-0">
                  {outcome.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="pl-6 mb-3 relative text-[var(--color-gray)] before:content-['✓'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-16 mb-8">Empowering Local Communities</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Since March 2024, West Papua Care has supported diverse education
            programs and community activities that connect traditional
            knowledge with modern skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <h3 className="mb-4">Education Programs</h3>
              <ul className="list-none p-0 m-0">
                <li className="pl-6 mb-3 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  English language skills
                </li>
                <li className="pl-6 mb-3 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  Recycling and Conservation workshops
                </li>
                <li className="pl-6 mb-0 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  Career education linked to ecological awareness
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <h3 className="mb-4">Community Support</h3>
              <ul className="list-none p-0 m-0">
                <li className="pl-6 mb-3 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  Subsidies to official education and medical facilities
                </li>
                <li className="pl-6 mb-3 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  Participation in communal traditions (Idul Fitri, Christmas,
                  Indigenous celebrations)
                </li>
                <li className="pl-6 mb-0 relative text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold">
                  Donations aiding economically disadvantaged locals
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-cream)] p-8 lg:p-12 rounded-lg text-center mt-16 flex flex-col items-center justify-center gap-4 text-balance w-full">
            <h3 className="text-center mb-4">
              Help Us Achieve These Outcomes
            </h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              Your support directly enables community rangers, scientific
              monitoring, and sustainable livelihood programs.
            </p>
            <Button variant="cta" size="md" asChild>
              <Link href="/get-involved">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
