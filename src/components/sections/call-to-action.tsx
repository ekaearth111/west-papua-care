import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="bg-[var(--color-off-white)] py-10 sm:py-16 lg:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="section-label text-[var(--color-gray)] mb-2 sm:mb-4">
            [ GET INVOLVED ]
          </div>
          <h2 className="text-center tracking-[-0.02em]">
            Join Us in Protecting the Amazon of the Seas
          </h2>
        </div>

        {/* Full-width landscape image */}
        <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden relative mb-6 sm:mb-8 lg:mb-12">
          <Image
            src="/images/cta-coral.jpg"
            alt="Colorful fish swimming over coral reef in the Coral Triangle"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-center text-[clamp(0.938rem,2vw,1.125rem)] leading-[1.6] sm:leading-[1.7] text-[var(--color-gray)]">
            Traditional indigenous governance meets conservation science to
            safeguard the world&apos;s most biodiverse marine ecosystem for
            generations to come. With strong community and traditional leaders
            support, we have a window of opportunity to protect this
            irreplaceable ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-center mt-6 sm:mt-8 lg:mt-12">
            <Button variant="cta" size="default" className="sm:h-14 sm:px-10 sm:text-lg" asChild>
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
