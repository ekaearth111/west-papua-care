"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[var(--color-forest-green-deep)] py-32 lg:py-48 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[var(--max-width-wide)] mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-[1]">
        <div
          className={cn(
            "flex flex-col gap-8",
            mounted && "animate-fade-in"
          )}
        >
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[var(--color-off-white)] leading-[1.1]">
            Protecting the Amazon of the Seas Through{" "}
            <span className="text-[var(--color-burnt-orange)]">Community Wisdom</span>{" "}
            and Conservation Science
          </h1>

          <p className="text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed text-[rgba(255,255,255,0.9)]">
            Establishing a 250 km² community-led Marine Protected Area in Raja Ampat,
            Indonesia—where local communities safeguard the world&apos;s most biodiverse
            coral reef ecosystem
          </p>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-start">
            <Button variant="cta" size="lg" asChild>
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/project">Learn About the Project</Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl",
            mounted && "animate-slide-in"
          )}
        >
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-forest-green-deep)] to-[var(--color-forest-green)] flex items-center justify-center">
            <span className="text-[rgba(255,255,255,0.3)] text-lg font-medium">
              Community Photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
