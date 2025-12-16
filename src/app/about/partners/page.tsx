import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Discover the organizations partnering with West Papua Care in our mission to protect Raja Ampat's marine biodiversity.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="OUR PARTNERS"
        title="Working Together"
        subtitle="Organizations partnering with us to protect Raja Ampat's marine biodiversity"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="text-center">
            <p className="text-xl text-[var(--color-gray)] max-w-2xl mx-auto">
              Our partners page is coming soon. We&apos;re working on showcasing
              the amazing organizations that support our community-led
              conservation efforts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
