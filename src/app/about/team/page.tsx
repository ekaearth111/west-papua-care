import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the people behind West Papua Care - conservationists, community organizers, and local leaders working together for marine protection.",
};

const team = [
  {
    name: "Kaspar Elias Anderegg",
    role: "Founder",
    bio: "West Papua Care's founder has lived in Indonesia for 10 years. As an expedition leader, he regularly visits the tribes and wilderness of West Papua, deeply connecting with their cultures. Motivated initially by adventure, Elias has since dedicated himself to humanitarian and conservation efforts to support these communities and ecosystems.",
  },
  {
    name: "Syarif Loji",
    role: "Regional Manager",
    bio: "Born in Misool with both his love for nature and his desire to protect it for future generations. His decade-long partnership with Elias Anderegg and his work as a ranger for the Misool Baseftin MPA has further raised his awareness about global ecological issues and protecting crucial ecosystems.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="OUR PEOPLE"
        title="Meet the People Behind the Mission"
        subtitle="Combining marine science, community organizing, and traditional knowledge"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          {/* Intro Text */}
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <p className="text-lg leading-[1.7] text-[var(--color-gray)]">
              Our team combines on-the-ground conservation experience with deep
              cultural connections to West Papua. We work in close partnership
              with traditional leaders, community members, and the 15-person MPA
              Committee to establish community-led marine protection areas in
              Misool, Raja Ampat.
            </p>
          </div>

          {/* Core Team */}
          <h2 className="text-center mb-12">Core Team</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Photo Placeholder */}
                <div className="h-[300px] bg-gradient-to-br from-[var(--color-forest-green-deep)] to-[var(--color-forest-green)] flex items-center justify-center">
                  <div className="w-[150px] h-[150px] rounded-full bg-[rgba(255,255,255,0.2)] border-4 border-[var(--color-off-white)]" />
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="mb-1">{member.name}</h3>
                  <div className="text-[var(--color-navy-accent)] font-semibold mb-4">
                    {member.role}
                  </div>
                  <p className="text-[var(--color-gray)] leading-relaxed m-0">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Box CTA */}
          <div className="bg-[var(--color-cream)] p-12 lg:p-16 rounded-xl text-center">
            <div className="section-label text-[var(--color-gray)]">
              [ GET INVOLVED ]
            </div>
            <h2 className="text-center mb-4">Join Us in Protecting the Amazon of the Seas</h2>
            <p className="text-center text-lg leading-relaxed text-[var(--color-gray)] max-w-[600px] mx-auto mb-8">
              Traditional indigenous governance meets conservation science to
              safeguard the world&apos;s most biodiverse marine ecosystem for
              generations to come
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
