"use client";

import { useState } from "react";
import { Ban, AlertTriangle, TrendingUp, Link2Off } from "lucide-react";
import { cn } from "@/lib/utils";

const threats = [
  {
    icon: Ban,
    title: "Cyanide & Blast Fishing",
    description:
      "Coral reef destruction from cyanide fishing and past bomb fishing leaving big areas already destroyed",
  },
  {
    icon: AlertTriangle,
    title: "Illegal Harvesting",
    description:
      "Sea turtle and egg harvesting, shark finning, and harvest of protected species including Napoleon wrasse and Bumphead Parrotfish",
  },
  {
    icon: TrendingUp,
    title: "External Illegal Fishing",
    description:
      "Illegal fishers from other islands as far as Sulawesi frequently visiting the area, threatening local marine resources",
  },
  {
    icon: Link2Off,
    title: "Key Species Under Threat",
    description:
      "Decline of endangered species including Hawksbill and Green sea turtles, Napoleon wrasse, Bumphead Parrotfish, and various shark species",
  },
];

export function Challenge() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-cream)] py-16 lg:py-20">
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="section-label text-[var(--color-gray)]">
            [ THE CHALLENGE ]
          </div>
          <h2 className="text-center tracking-[-0.02em] mb-4">
            Why This Matters
          </h2>
          <h3 className="text-center font-normal text-[var(--color-gray)]">
            Critical Threats
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative bg-[var(--color-off-white)] border border-[var(--color-light-gray)] rounded p-8 transition-all duration-250 flex flex-col items-start gap-4 overflow-hidden cursor-pointer",
                  "hover:border-[var(--color-navy-accent)] hover:-translate-y-1 hover:shadow-md"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="article"
              >
                <div className="w-12 h-12 p-2 bg-[var(--color-burnt-orange)] text-[var(--color-off-white)] flex items-center justify-center rounded-xl transition-transform duration-250 group-hover:scale-110">
                  <Icon className="w-full h-full" />
                </div>
                <h4 className="m-0">
                  {threat.title}
                </h4>
                <p className="text-lg leading-relaxed text-[var(--color-gray)] m-0">
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

        <div className="bg-[var(--color-off-white)] border border-[var(--color-light-gray)] rounded p-12 text-center">
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] m-0 max-w-[750px] mx-auto">
            Misool, located in the heart of the Coral Triangle—the global
            epicenter of marine biodiversity—faces mounting threats but offers a
            unique opportunity. With strong community consensus and traditional
            leader endorsement already secured, we can act now to protect this
            irreplaceable ecosystem before it&apos;s too late.
          </p>
        </div>
      </div>
    </section>
  );
}
