import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="bg-[var(--color-off-white)] py-20 lg:py-32">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <div className="section-label text-[var(--color-gray)]">
          [ GET INVOLVED ]
        </div>
        <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold tracking-[-0.02em] text-[var(--color-charcoal)] mb-6">
          Join Us in Protecting the Amazon of the Seas
        </h2>
        <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] leading-[1.7] text-[var(--color-gray)] mb-12">
          Traditional indigenous governance meets conservation science to
          safeguard the world&apos;s most biodiverse marine ecosystem for
          generations to come
        </p>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-center justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/get-involved">Support Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
