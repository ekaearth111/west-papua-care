"use client";

import { useState } from "react";
import { Users, FlaskConical, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Users,
    title: "Community Ownership",
    points: [
      "Free, Prior, and Informed Consent protocols",
      "MPA Committee with traditional leaders",
      "30% women/youth representation",
      "Integration of customary law (adat)",
    ],
  },
  {
    icon: FlaskConical,
    title: "Science-Based Protection",
    points: [
      "250 km² no-take zone",
      "Quarterly Reef Check monitoring",
      "GPS-marked survey sites",
      "IUCN Red List species tracking",
    ],
  },
  {
    icon: Clock,
    title: "Community Benefits",
    points: [
      "Spillover effects for fishing",
      "Sustainable tourism opportunities",
      "Alternative livelihoods",
      "Strengthened traditional governance",
    ],
  },
];

export function Approach() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-forest-green-deep)] py-16 lg:py-20 relative">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[var(--max-width-content)] mx-auto px-8 relative z-[1]">
        <div className="text-center mb-12 lg:mb-16">
          <div className="section-label text-[rgba(255,255,255,0.7)]">
            [ OUR APPROACH ]
          </div>
          <h2 className="text-center tracking-[-0.02em] text-[var(--color-off-white)] mb-4">
            Community-Led Conservation
          </h2>
          <h3 className="text-center font-normal font-[var(--font-family-sans)] text-[rgba(255,255,255,0.8)]">
            Traditional Governance Meets Modern Science
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-12 transition-all duration-500 flex flex-col items-start gap-4 overflow-hidden cursor-pointer",
                  "hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.08)]"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="article"
              >
                <div className="w-14 h-14 p-4 bg-[var(--color-burnt-orange)] text-[var(--color-off-white)] flex items-center justify-center rounded-2xl mb-2 transition-transform duration-250 group-hover:scale-110">
                  <Icon className="w-full h-full" />
                </div>
                <h4 className="text-[var(--color-off-white)] m-0">
                  {pillar.title}
                </h4>
                <ul className="list-none m-0 p-0 flex flex-col gap-2 w-full">
                  {pillar.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-lg leading-relaxed text-[rgba(255,255,255,0.75)] pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--color-burnt-orange)]"
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
