import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudienceCTA {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  icon?: React.ReactNode;
}

interface AudienceCTAsProps {
  audiences: AudienceCTA[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function AudienceCTAs({
  audiences,
  title = "How You Can Help",
  subtitle,
  className,
}: AudienceCTAsProps) {
  return (
    <section className={cn("py-16 lg:py-24 bg-[var(--color-off-white)]", className)}>
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="text-center mb-12">
          <div className="section-label text-[var(--color-gray)]">
            [ GET INVOLVED ]
          </div>
          <h2 className="text-center mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-center text-lg text-[var(--color-gray)] max-w-[600px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-[var(--color-cream)] p-8 rounded-lg flex flex-col hover:shadow-[var(--shadow-card-hover)] transition-shadow"
            >
              {audience.icon && (
                <div className="w-14 h-14 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center mb-6">
                  {audience.icon}
                </div>
              )}
              <h3 className=" mb-3">
                {audience.title}
              </h3>
              <p className="text-[var(--color-gray)] mb-6 flex-grow">
                {audience.description}
              </p>
              <Button variant="secondary" size="sm" asChild>
                <Link href={audience.href} className="inline-flex items-center gap-2">
                  {audience.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
