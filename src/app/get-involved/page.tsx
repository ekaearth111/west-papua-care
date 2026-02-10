import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Building2,
  Briefcase,
  GraduationCap,
  Users,
  Megaphone,
} from "lucide-react";

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
      "Larger contributions can fund specific programs: a ranger for a year, scientific equipment, or community training workshops. Contact us to discuss impact opportunities.",
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

const volunteerOptions = [
  {
    title: "On-Site Opportunities",
    description:
      "Join our team in Raja Ampat for hands-on conservation work including reef monitoring, community education, and patrol support.",
  },
  {
    title: "Virtual Support",
    description:
      "Contribute remotely with skills in translation, design, communications, data analysis, or administrative support.",
  },
  {
    title: "Skilled Volunteer Placements",
    description:
      "Share professional expertise in marine science, community development, fundraising, or organizational management.",
  },
  {
    title: "Youth Exchange Programs",
    description:
      "Participate in cultural exchange programs connecting young people across communities committed to conservation.",
  },
];

const advocacyOptions = [
  {
    title: "Share on Social Media",
    description:
      "Amplify our message and help raise awareness about community-led marine conservation.",
  },
  {
    title: "Spread the Word",
    description:
      "Tell friends, family, and colleagues about our mission to protect Raja Ampat.",
  },
  {
    title: "Connect Us",
    description:
      "Introduce us to potential donors, partners, or supporters who share our values.",
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

      {/* Hero Image */}
      <section className="bg-[var(--color-off-white)] pt-8 lg:pt-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <Image
              src="/images/get-involved.jpg"
              alt="Community members in Magey Village"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donate Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="m-0">Donate</h2>
          </div>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Your donation directly supports community-led marine conservation
            in Raja Ampat. 100% of donations fund on-the-ground conservation
            activities. We have separate funding for administrative costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {waysToDonate.map((way, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg"
              >
                <h3 className="mb-3">{way.title}</h3>
                <p className="text-base text-[var(--color-gray)] m-0">
                  {way.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 mb-6">Your Impact</h3>
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
              <Link href="mailto:westpapuacare@gmail.com?subject=Donation%20Inquiry">Contact Us to Donate</Link>
            </Button>
          </div>

          {/* Partner Section */}
          <div className="flex items-center gap-4 mt-16 mb-6">
            <div className="w-12 h-12 bg-[var(--color-forest-green)] rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="m-0">Partner With Us</h2>
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
                  <h3 className="mb-3">{type.title}</h3>
                  <p className="text-base text-[var(--color-gray)] m-0">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center my-8">
            <Button variant="secondary" size="md" asChild>
              <Link href="mailto:westpapuacare@gmail.com?subject=Partnership%20Inquiry">Discuss Partnership</Link>
            </Button>
          </div>

          {/* Volunteer Section */}
          <div className="flex items-center gap-4 mt-16 mb-6">
            <div className="w-12 h-12 bg-[var(--color-navy-accent)] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="m-0">Volunteer</h2>
          </div>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Join our community of volunteers making a difference for marine
            conservation. Whether on-site or remote, your skills and time can
            have a real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {volunteerOptions.map((option, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg"
              >
                <h3 className="mb-3">{option.title}</h3>
                <p className="text-base text-[var(--color-gray)] m-0">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center my-8">
            <Button variant="secondary" size="md" asChild>
              <Link href="mailto:westpapuacare@gmail.com?subject=Volunteer%20Inquiry">Volunteer Inquiry</Link>
            </Button>
          </div>

          {/* Advocate Section */}
          <div className="flex items-center gap-4 mt-16 mb-6">
            <div className="w-12 h-12 bg-[var(--color-charcoal)] rounded-full flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <h2 className="m-0">Advocate</h2>
          </div>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            Even without donating or volunteering, you can help by spreading
            the word about community-led marine conservation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {advocacyOptions.map((option, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] p-8 rounded-lg"
              >
                <h3 className="mb-3">{option.title}</h3>
                <p className="text-base text-[var(--color-gray)] m-0">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[var(--color-cream)] p-8 lg:p-12 rounded-lg text-center mt-12 flex flex-col items-center justify-center gap-4 text-balance">
            <h3 className="text-center mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              Learn more about how you can support our mission.
            </p>
            <Button variant="cta" size="md" asChild>
              <Link href="mailto:westpapuacare@gmail.com?subject=General%20Inquiry">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
