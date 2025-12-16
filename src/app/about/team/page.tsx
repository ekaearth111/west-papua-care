import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind West Papua Care - conservationists, community organizers, and local leaders working together for marine protection.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="OUR PEOPLE"
        title="Meet the Team"
        subtitle="Conservationists, community organizers, and local leaders working together for marine protection"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="text-center">
            <p className="text-xl text-[var(--color-gray)] max-w-2xl mx-auto">
              Our team page is coming soon. We&apos;re working on bringing you
              detailed profiles of the dedicated individuals who make our
              community-led conservation possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
