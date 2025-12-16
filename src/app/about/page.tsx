import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about West Papua Care - building a new model for marine conservation that empowers local communities and protects the world's most biodiverse reefs.",
};

const values = [
  {
    icon: "🤝",
    title: "Community Ownership",
    description:
      "Local communities must have genuine decision-making power, not just consultation. We follow rigorous FPIC protocols and ensure community voices drive all major decisions.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Practice",
    description:
      "Science guides our approach. Quarterly monitoring tracks what's working and what isn't, allowing us to adapt and improve based on real data, not assumptions.",
  },
  {
    icon: "🌱",
    title: "Long-Term Sustainability",
    description:
      "We build local capacity and sustainable financing so conservation continues after external support ends. Our goal is to become unnecessary.",
  },
  {
    icon: "💎",
    title: "Transparency & Accountability",
    description:
      "We publicly share monitoring data, financial reports, and governance decisions. Transparency builds trust with communities and donors alike.",
  },
  {
    icon: "🎯",
    title: "Cultural Respect",
    description:
      "Traditional governance systems like adat and sasi aren't obstacles—they're foundations. We integrate customary law with modern MPA structures.",
  },
  {
    icon: "🌍",
    title: "Scalable Impact",
    description:
      "While focused on Raja Ampat, we're building a replicable model that communities across the Coral Triangle and beyond can adapt to their contexts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="OUR STORY"
        title="Rooted in Community, Driven by Science"
        subtitle="Building a new model for marine conservation that empowers local communities and protects the world's most biodiverse reefs"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mb-6">
              Our Origin Story
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              West Papua Care was founded in 2024 by conservationists and
              community organizers who witnessed firsthand the failures of
              top-down marine protection. Time and again, we saw Marine
              Protected Areas established without genuine community consent,
              leading to conflict, poor compliance, and ultimately unsuccessful
              conservation.
            </p>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              We knew there had to be a better way—one that respected
              traditional governance, secured authentic community ownership, and
              delivered measurable conservation outcomes. Raja Ampat, with its
              exceptional biodiversity and strong traditional leadership,
              provided the perfect opportunity to demonstrate this alternative
              model.
            </p>

            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-[rgba(211,100,15,0.08)] to-[rgba(211,100,15,0.12)] border-l-4 border-[var(--color-burnt-orange)] p-12 rounded-lg my-8">
              <p className="text-2xl leading-[1.7] text-[var(--color-charcoal)] font-medium m-0">
                To protect marine biodiversity through community-led
                conservation that respects traditional governance, relies on
                rigorous science, and ensures lasting benefits for local
                communities.
              </p>
            </div>

            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
              Our Vision
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              We envision a future where coastal communities across the Coral
              Triangle lead marine conservation efforts, managing thriving
              Marine Protected Areas that restore fish populations, protect
              coral reefs, and provide sustainable livelihoods for generations
              to come.
            </p>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              By proving this model works in Raja Ampat, we aim to inspire and
              support communities throughout Indonesia and beyond to take
              control of their marine future.
            </p>

            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-cream)] p-8 rounded-lg text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-base text-[var(--color-gray)] text-left m-0">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
              Why Raja Ampat
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              Raja Ampat isn&apos;t just stunningly beautiful—it&apos;s
              irreplaceable. As the global epicenter of marine biodiversity,
              protecting these reefs protects the genetic library for the
              world&apos;s coral ecosystems. Yet this treasure faces mounting
              threats: destructive fishing, illegal harvesting, and weakening
              traditional management.
            </p>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              What made Raja Ampat the right place to start was the combination
              of exceptional biodiversity, strong traditional governance
              structures, and communities ready to lead. After two years of
              relationship-building and consultations, we achieved strong
              consensus across 10+ villages to establish community-led
              protection.
            </p>

            <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg text-[var(--color-gray)] mb-6">
                Help us prove that community-led conservation can protect the
                world&apos;s most precious marine ecosystems.
              </p>
              <Button variant="cta" size="md" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
