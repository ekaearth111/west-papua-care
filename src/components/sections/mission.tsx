import { Quote, ImageIcon } from "lucide-react";

export function Mission() {
  return (
    <section className="bg-[var(--color-off-white)] py-16 lg:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full h-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] rounded overflow-hidden">
            {/* Placeholder for community meeting photo */}
            <div className="w-full h-full bg-[var(--color-cream)] flex flex-col items-center justify-center gap-4 text-[var(--color-gray)]">
              <ImageIcon className="w-12 h-12 opacity-30" />
              <span className="font-[var(--font-family-heading)] text-lg opacity-50">
                Community Photo
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="section-label text-[var(--color-gray)]">
              [ OUR MISSION ]
            </div>
            <div className="relative">
              <div className="w-12 h-12 text-[var(--color-burnt-orange)] mb-4 opacity-70">
                <Quote className="w-full h-full" />
              </div>
              <blockquote className="font-[var(--font-family-sans)] text-[clamp(1.375rem,2.5vw,1.625rem)] leading-[1.7] text-[var(--color-charcoal)] m-0 p-0 font-normal">
                Our mission is to combine conservation work with real community
                collaboration and development in the provinces of Papua. Our
                ecosystems can only thrive in the long-term, if people have a
                chance to prosper too.
              </blockquote>
              <cite className="block mt-6 font-[var(--font-family-heading)] text-lg font-medium text-[var(--color-gray)] not-italic">
                — West Papua Care
              </cite>
            </div>

            <p className="text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] text-[var(--color-gray)]">
              We&apos;re establishing a community-led No-Take Zone Marine
              Protected Area that benefits both marine ecosystems and
              neighboring fishing communities by boosting fish populations
              through spillover, securing food resources, enhancing ecotourism
              potential, and strengthening climate resilience through healthy
              habitats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
