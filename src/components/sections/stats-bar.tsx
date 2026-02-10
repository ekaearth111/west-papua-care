"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  variant?: "light" | "dark";
  className?: string;
}

export function StatsBar({
  stats,
  variant = "light",
  className,
}: StatsBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "py-12 lg:py-16",
        variant === "dark"
          ? "bg-[var(--color-forest-green-deep)]"
          : "bg-[var(--color-cream)]",
        className
      )}
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "font-[var(--font-family-heading)] text-[clamp(2rem,4vw,3.5rem)] font-bold mb-2",
                  variant === "dark"
                    ? "text-[var(--color-burnt-orange)]"
                    : "text-[var(--color-navy-accent)]"
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-base lg:text-lg leading-[1.4]",
                  variant === "dark"
                    ? "text-[rgba(255,255,255,0.8)]"
                    : "text-[var(--color-gray)]"
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
