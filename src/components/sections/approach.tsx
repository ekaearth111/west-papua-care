"use client";

import { useState } from "react";
import { Users, FlaskConical, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Users,
    title: "Community Ownership",
    points: [
      "Free, Prior, and Informed Consent (FPIC) protocols",
      "MPA Committee with traditional leaders, fishers, women's groups",
      "Minimum 30% women/youth representation",
      "Integration of customary law (adat) with modern MPA regulations",
      "Traditional closure areas (sasi) within no-take zone design",
    ],
  },
  {
    icon: FlaskConical,
    title: "Science-Based Protection",
    points: [
      "250 km² no-take zone following international best practices",
      "Quarterly monitoring using Reef Check protocols",
      "GPS-marked survey sites for long-term data",
      "IUCN Red List species identification and tracking",
      "Partnership with local universities and research institutions",
    ],
  },
  {
    icon: Clock,
    title: "Community Benefits",
    points: [
      "Spillover effects increasing fish catches in adjacent areas",
      "Sustainable tourism through community-based guiding",
      "Alternative livelihood development reducing fishing pressure",
      "Strengthened traditional governance creating social capital",
    ],
  },
];

export function Approach() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-off-white)] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 sm:mb-8">Our Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative bg-[var(--color-cream)] border border-[var(--color-light-gray)] rounded-2xl p-4 sm:p-5 lg:p-7 transition-all duration-500 flex flex-col items-start gap-3 sm:gap-4 overflow-hidden cursor-pointer",
                  "hover:border-[var(--color-burnt-orange)] hover:-translate-y-1 hover:shadow-lg"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="article"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 p-2.5 sm:p-3 lg:p-4 bg-[var(--color-burnt-orange)] text-[var(--color-off-white)] flex items-center justify-center rounded-xl sm:rounded-2xl mb-1 sm:mb-2 transition-transform duration-250">
                  <Icon className="w-full h-full" />
                </div>
                <h4 className="text-[var(--color-charcoal)] m-0 text-base sm:text-lg">
                  {pillar.title}
                </h4>
                <ul className="list-none m-0 p-0 flex flex-col gap-1.5 sm:gap-2 w-full">
                  {pillar.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-sm sm:text-base leading-relaxed text-[var(--color-gray)] pl-5 sm:pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--color-burnt-orange)]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-burnt-orange)] transition-transform duration-500 origin-left",
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
