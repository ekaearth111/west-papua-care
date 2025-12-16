"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const keyPoints = [
  "Community-led Marine Protected Area in Misool in Raja Ampat covering 250 km²",
  "At the heart of the Coral Triangle - the most biodiverse reefs on earth",
  "Empower coastal communities and build local resilience",
  "Traditional indigenous governance meets conservation science",
];

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
            "flex flex-col gap-12",
            mounted && "animate-fade-in"
          )}
        >
          <h1 className="tracking-[-0.02em] text-[var(--color-off-white)]">
            Community-Led Marine Conservation in{" "}
            <span className="text-[var(--color-burnt-orange)]">Raja Ampat</span>
          </h1>

          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {keyPoints.map((point, index) => (
              <li
                key={index}
                className="text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed text-[rgba(255,255,255,0.9)] pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--color-burnt-orange)] before:text-[1.5em] before:leading-[1]"
              >
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-start">
            <Button variant="cta" size="lg" asChild>
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/project">Learn More</Link>
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
