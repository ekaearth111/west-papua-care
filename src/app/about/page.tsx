import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import {
  Users,
  Microscope,
  Sprout,
  Eye,
  Heart,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about West Papua Care - building a new model for marine conservation that empowers local communities and protects the world's most biodiverse reefs.",
};

const values = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Every decision respects Free, Prior, and Informed Consent protocols. Communities lead, we support.",
  },
  {
    icon: Heart,
    title: "Traditional Knowledge",
    description:
      "Integration of customary law (adat) with modern conservation. Traditional systems aren't obstacles—they're foundations.",
  },
  {
    icon: Microscope,
    title: "Scientific Rigor",
    description:
      "Evidence-based approaches with measurable outcomes. Quarterly monitoring tracks what's working.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open reporting and community-led governance. We publicly share monitoring data, financials, and decisions.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "Long-term thinking for 30+ years of effective protection. We build capacity so conservation continues.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description:
      "Minimum 30% representation for women, youth, and diverse voices in all governance structures.",
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
            <h2 className=" mb-6">
              Our Story
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              West Papua Care was founded on the belief that effective
              conservation must go hand-in-hand with community empowerment.
              After years of expedition work in West Papua&apos;s remote
              regions, our founders recognized that the traditional knowledge
              and stewardship of local communities are essential to long-term
              ecosystem protection.
            </p>

            <h2 className=" mt-12 mb-6">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-[rgba(10,22,40,0.08)] to-[rgba(10,22,40,0.12)] border-l-4 border-[var(--color-navy-accent)] p-12 rounded-lg my-8">
              <p className="text-2xl leading-[1.7] text-[var(--color-charcoal)] font-medium m-0">
                To protect marine biodiversity through community-led
                conservation that respects traditional governance, relies on
                rigorous science, and ensures lasting benefits for local
                communities.
              </p>
            </div>

            <h2 className=" mt-12 mb-6">
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

            <h2 className=" mt-12 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-[var(--color-cream)] p-8 rounded-lg text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className=" mb-4">
                      {value.title}
                    </h3>
                    <p className="text-base text-[var(--color-gray)] text-left m-0">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <h2 className=" mt-12 mb-6">
              Our Approach
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-12">
              We don&apos;t impose conservation from the outside. Instead, we
              work alongside local communities to strengthen their traditional
              management systems (sasi) while providing the tools, training, and
              resources needed for effective modern marine protection.
            </p>

            <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-12">
              <h3 className="text-center mb-4">
                Join Our Mission
              </h3>
              <p className="text-center text-lg text-[var(--color-gray)] mb-6">
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
