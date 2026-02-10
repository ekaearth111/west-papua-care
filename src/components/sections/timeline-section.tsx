"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TimelineSection({
  items,
  title = "Our Journey",
  subtitle,
  className,
}: TimelineSectionProps) {
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
      className={cn("py-16 lg:py-24 bg-[var(--color-cream)]", className)}
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="section-label text-[var(--color-gray)]">
            [ TIMELINE ]
          </div>
          <h2 className="text-center mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-center text-lg text-[var(--color-gray)] mb-12">{subtitle}</p>
          )}

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-navy-accent)]/30 -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex gap-8 transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Year marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-navy-accent)] text-white flex items-center justify-center text-xs font-bold z-10">
                    {item.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-[var(--shadow-card)]",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    <span className="inline-block text-sm font-semibold text-[var(--color-navy-accent)] uppercase tracking-wide mb-2">
                      {item.year}
                    </span>
                    <h3 className=" mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-gray)] m-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
