import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Users, Microscope, Sprout, Eye, Heart, Globe } from "lucide-react";

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
      "Integration of customary law (adat) with modern conservation. Traditional systems aren't obstacles. They're foundations.",
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
        title={<>Rooted in Community,<br />Driven by Science</>}
        subtitle="Building a new model for marine conservation that empowers local communities and protects the world's most biodiverse reefs"
      />

      {/* Hero Image */}
      <section className="bg-[var(--color-off-white)] pt-8 lg:pt-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <Image
              src="/images/about-story.jpg"
              alt="Magey Village community members in West Papua"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Our Story</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            West Papua Care was founded on the belief that effective
            conservation must go hand-in-hand with community empowerment.
            After years of expedition work in West Papua&apos;s remote
            regions, our founders recognized that the traditional knowledge
            and stewardship of local communities are essential to long-term
            ecosystem protection.
          </p>

          <h2 className="mt-16 mb-8">Our Mission</h2>
          <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-navy-accent)] p-8 lg:p-12 rounded-lg my-8">
            <p className="text-xl lg:text-2xl leading-[1.7] text-[var(--color-charcoal)] font-medium m-0">
              To protect marine biodiversity through community-led
              conservation that respects traditional governance, relies on
              rigorous science, and ensures lasting benefits for local
              communities.
            </p>
          </div>

          <h2 className="mt-16 mb-8">Our Vision</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
            We envision a future where coastal communities across the Coral
            Triangle lead marine conservation efforts, managing thriving
            Marine Protected Areas that restore fish populations, protect
            coral reefs, and provide sustainable livelihoods for generations
            to come.
          </p>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            By proving this model works in Raja Ampat, we aim to inspire and
            support communities throughout Indonesia and beyond to take
            control of their marine future.
          </p>

          <h2 className="mt-16 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--color-cream)] p-8 rounded-lg"
                >
                  <div className="w-12 h-12 mb-4 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-base leading-relaxed text-[var(--color-gray)] m-0">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-[var(--color-cream)] p-8 lg:p-12 rounded-lg text-center mt-16 flex flex-col items-center justify-center gap-4 text-balance w-full">
            <h3 className="text-center mb-4">Join Our Mission</h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              Become part of a community-led conservation project that
              protects the world&apos;s most precious marine ecosystems.
            </p>
            <Button variant="cta" size="md" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
