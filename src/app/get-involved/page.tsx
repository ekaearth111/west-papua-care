import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join our mission to protect Raja Ampat's marine biodiversity - donate, partner with us, or explore career opportunities.",
};

const waysToDonate = [
  {
    title: "One-Time Gift",
    description:
      "Make an immediate impact with a single donation of any amount. Every contribution helps fund ranger patrols, scientific monitoring, and community programs.",
  },
  {
    title: "Monthly Giving",
    description:
      "Become a sustaining supporter with a monthly gift. Recurring donations provide reliable funding that allows us to plan long-term conservation activities.",
  },
  {
    title: "Major Gifts",
    description:
      "Larger contributions can fund specific programs—a ranger for a year, scientific equipment, or community training workshops. Contact us to discuss impact opportunities.",
  },
];

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partners",
    description:
      "Align your brand with meaningful ocean conservation. Partnership opportunities include program sponsorship, employee engagement, and cause marketing.",
  },
  {
    icon: GraduationCap,
    title: "Research Partners",
    description:
      "Collaborate on marine science research in one of the world's most biodiverse ecosystems. We welcome partnerships with universities and research institutions.",
  },
  {
    icon: Briefcase,
    title: "NGO Partners",
    description:
      "We collaborate with conservation organizations, community development groups, and policy advocates to amplify our collective impact.",
  },
];

const impactLevels = [
  {
    amount: "$50",
    impact: "Provides one day of ranger patrol operations",
  },
  {
    amount: "$250",
    impact: "Funds scientific monitoring equipment for one site",
  },
  {
    amount: "$500",
    impact: "Sponsors Reef Check training for one community member",
  },
  {
    amount: "$1,000",
    impact: "Supports one month of community liaison activities",
  },
  {
    amount: "$5,000",
    impact: "Funds a complete quarterly ecosystem survey",
  },
  {
    amount: "$10,000",
    impact: "Sponsors a ranger position for one year",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        label="GET INVOLVED"
        title="Join Our Mission"
        subtitle="Help protect the Amazon of the Seas through community-led conservation"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="max-w-[900px] mx-auto">
            {/* Donate Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className=" m-0">
                Donate
              </h2>
            </div>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
              Your donation directly supports community-led marine conservation
              in Raja Ampat. 100% of donations fund on-the-ground conservation
              activities—we have separate funding for administrative costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {waysToDonate.map((way, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-cream)] p-8 rounded-lg"
                >
                  <h3 className=" mb-3">
                    {way.title}
                  </h3>
                  <p className="text-base text-[var(--color-gray)] m-0">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className=" mt-8 mb-6">
              Your Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              {impactLevels.map((level, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-cream)] p-6 rounded-lg border-l-4 border-[var(--color-navy-accent)]"
                >
                  <div className="font-[var(--font-family-heading)] text-2xl font-bold text-[var(--color-navy-accent)] mb-2">
                    {level.amount}
                  </div>
                  <p className="text-sm text-[var(--color-gray)] m-0">
                    {level.impact}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center my-8">
              <Button variant="cta" size="lg" asChild>
                <Link href="/contact">Contact Us to Donate</Link>
              </Button>
            </div>

            {/* Partner Section */}
            <div className="flex items-center gap-4 mt-16 mb-6">
              <div className="w-12 h-12 bg-[var(--color-forest-green)] rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className=" m-0">
                Partner With Us
              </h2>
            </div>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
              We work with organizations that share our commitment to
              community-led conservation. Partnership opportunities are tailored
              to align with your goals and values.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {partnershipTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="bg-[var(--color-cream)] p-8 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-[var(--color-forest-green)] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className=" mb-3">
                      {type.title}
                    </h3>
                    <p className="text-base text-[var(--color-gray)] m-0">
                      {type.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center my-8">
              <Button variant="secondary" size="md" asChild>
                <Link href="/contact">Discuss Partnership</Link>
              </Button>
            </div>

            {/* Careers Section */}
            <div className="flex items-center gap-4 mt-16 mb-6">
              <div className="w-12 h-12 bg-[var(--color-charcoal)] rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className=" m-0">
                Work With Us
              </h2>
            </div>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
              We&apos;re building a team of dedicated conservationists,
              community organizers, and marine scientists. While we&apos;re a
              small organization, we occasionally have opportunities for the
              right people.
            </p>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg my-8">
              <h3 className=" mb-4">
                Current Openings
              </h3>
              <p className="text-[var(--color-gray)] mb-4">
                No positions are currently open. However, we&apos;re always
                interested in hearing from experienced marine scientists,
                community development specialists, and conservation
                professionals who are passionate about community-led
                conservation.
              </p>
              <p className="text-[var(--color-gray)] m-0">
                Send your CV and a brief introduction to{" "}
                <a
                  href="mailto:careers@westpapuacare.org"
                  className="text-[var(--color-navy-accent)] hover:underline"
                >
                  careers@westpapuacare.org
                </a>
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[var(--color-forest-green)] p-12 rounded-lg text-center mt-12">
              <h3 className="text-center text-[var(--color-off-white)] mb-4">
                Stay Connected
              </h3>
              <p className="text-center text-lg text-[rgba(255,255,255,0.9)] mb-6">
                Subscribe to our newsletter for updates on our progress and
                impact.
              </p>
              <Button variant="cta" size="md" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
