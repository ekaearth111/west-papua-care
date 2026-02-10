import Image from "next/image";
import { Quote } from "lucide-react";

export function Mission() {
  return (
    <section className="bg-[var(--color-off-white)] py-16 lg:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text content first */}
        <div className="max-w-[800px] mx-auto mb-12 lg:mb-16">
          <div className="section-label text-[var(--color-gray)] text-center mb-8">
            [ OUR MISSION ]
          </div>
          <div className="relative text-center">
            <div className="w-12 h-12 text-[var(--color-navy-accent)] mb-4 opacity-70 mx-auto">
              <Quote className="w-full h-full" />
            </div>
            <blockquote className="font-[var(--font-family-sans)] text-[clamp(1.375rem,2.5vw,1.625rem)] leading-[1.7] text-[var(--color-charcoal)] m-0 p-0 font-normal">
              Our mission is to combine conservation work with real community
              collaboration and development in the provinces of Papua. Our
              ecosystems can only thrive in the long-term, if people have a
              chance to prosper too.
            </blockquote>
            <cite className="block mt-6 font-[var(--font-family-sans)] text-lg font-medium text-[var(--color-gray)] not-italic">
              - West Papua Care
            </cite>
          </div>
        </div>

        {/* Full-width landscape image */}
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
          <Image
            src="/images/mission-community.jpg"
            alt="West Papua community members in a boat on the river"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Description below image */}
        <div className="max-w-[800px] mx-auto mt-12 lg:mt-16">
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] text-[var(--color-gray)] text-center">
            We&apos;re establishing a community-led No-Take Zone Marine
            Protected Area that benefits both marine ecosystems and
            neighboring fishing communities by boosting fish populations
            through spillover, securing food resources, enhancing ecotourism
            potential, and strengthening climate resilience through healthy
            habitats.
          </p>
        </div>
      </div>
    </section>
  );
}
