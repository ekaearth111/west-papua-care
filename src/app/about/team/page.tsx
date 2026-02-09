import type { Metadata } from "next";
import Image from "next/image";
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
        title={<>Meet the People<br />Behind the Mission</>}
        subtitle="Combining marine science, community organizing, and traditional knowledge"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          {/* Team Section */}
          <div className="flex flex-col items-center justify-center gap-4 mb-24">

            {/* Team Photo */}
            <div className="w-full max-w-[900px] aspect-[3/2] rounded-xl overflow-hidden relative mb-12">
              <Image
                src="/west-papua-care/images/team.jpg"
                alt="Kaspar Elias Anderegg and Syarif Loji on the beach in Misool"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>

            {/* Intro Text */}
            <div className="max-w-[800px] mx-auto text-center mb-12">
              <p className="text-lg leading-[1.7] text-[var(--color-gray)]">
                Our team combines on-the-ground conservation experience with deep
                cultural connections to West Papua. We work in close partnership
                with traditional leaders, community members, and the 15-person MPA
                Committee to establish community-led marine protection areas in
                Misool, Raja Ampat.
              </p>
            </div>

            {/* Team Member Description Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[900px]">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-cream)] rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="mb-1">{member.name}</h3>
                  <div className="text-[var(--color-navy-accent)] font-semibold mb-4">
                    {member.role}
                  </div>
                  <p className="text-[var(--color-gray)] leading-relaxed m-0">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More CTA */}
          <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-16 flex flex-col items-center justify-center gap-4 text-balance w-full">
            <h3 className="text-center mb-4">Learn More About Our Work</h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              See how we&apos;re protecting the Amazon of the Seas through community-led conservation.
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
