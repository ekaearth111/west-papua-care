"use client";

import { useState } from "react";
import { Ban, AlertTriangle, TrendingUp, Link2Off } from "lucide-react";
import { cn } from "@/lib/utils";

const threats = [
  {
    icon: Ban,
    title: "Biodiversity Under Pressure",
    description:
      "Raja Ampat hosts 75% of all known coral species but faces increasing fishing pressure threatening this irreplaceable ecosystem",
  },
  {
    icon: AlertTriangle,
    title: "Destructive Practices",
    description:
      "Cyanide fishing, blast fishing, shark finning, and turtle poaching continue to devastate reef ecosystems and marine life",
  },
  {
    icon: Link2Off,
    title: "Weakening Traditional Systems",
    description:
      "Loss of traditional management systems (sasi) is weakening community resource governance that protected these waters for generations",
  },
  {
    icon: TrendingUp,
    title: "External Illegal Fishing",
    description:
      "Illegal fishing from neighboring islands threatens biodiversity hotspots and local community livelihoods",
  },
];

export function Challenge() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-cream)] py-16 lg:py-24">
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-12 flex flex-col items-center justify-center gap-4">
          <div className="section-label text-[var(--color-gray)]">
            [ THE CHALLENGE ]
          </div>
          <h2 className="text-center tracking-[-0.02em] mb-6">
            Why This Matters
          </h2>
          <p className="text-center text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] text-[var(--color-gray)]">
            Located in the global epicenter of marine biodiversity with the highest fish species richness on Earth, the Misool region represents a critical habitat for threatened species including Napoleon wrasse, Hawksbill and Green sea turtles, Bumphead parrotfish, and reef sharks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative bg-[var(--color-off-white)] border border-[var(--color-light-gray)] rounded-xl p-6 transition-all duration-250 flex flex-col items-start gap-4 overflow-hidden cursor-pointer h-full",
                  "hover:border-[var(--color-navy-accent)] hover:-translate-y-1 hover:shadow-md"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="article"
              >
                <div className="w-12 h-12 p-2.5 bg-[var(--color-burnt-orange)] text-[var(--color-off-white)] flex items-center justify-center rounded-xl">
                  <Icon className="w-full h-full" />
                </div>
                <h4 className="m-0 text-lg">{threat.title}</h4>
                <p className="text-base leading-relaxed text-[var(--color-gray)] m-0">
                  {threat.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-navy-accent)] transition-transform duration-500 origin-left",
                    hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
