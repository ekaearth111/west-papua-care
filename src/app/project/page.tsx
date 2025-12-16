import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Project Overview",
  description:
    "Learn about our community-led Marine Protected Area in Misool, Raja Ampat - a 250 km² no-take zone protecting the world's most biodiverse coral reefs.",
};

const goals = [
  "Establish 250 km² no-take zone Marine Protected Area with 10km buffer zone",
  "Restore traditional governance systems (adat/sasi) for marine management",
  "Target 50% increase in fish biomass within 5 years based on regional MPA performance data",
  "Protect key species: Napoleon wrasse, Hawksbill and Green sea turtles, Bumphead Parrotfish, and shark species",
  "Create sustainable livelihoods through ecotourism and resource management",
  "Conduct GPS-marked scientific surveys of coral health and ecosystem dynamics",
  "IUCN Red List species identification and conservation status tracking",
  "Establish base camp operations on Cempedak Island with ranger patrols",
];

const stats = [
  { value: "250 km²", label: "Marine area under community protection" },
  { value: "10+", label: "Villages with strong consensus" },
  { value: "15", label: "Monitoring sites established" },
  { value: "12", label: "Community members Reef Check certified" },
];

export default function ProjectPage() {
  return (
    <>
      <PageHero
        label="PROJECT OVERVIEW"
        title="Community-Led Marine Protected Area"
        subtitle="Establishing a 250 km² no-take zone in Misool, Raja Ampat through traditional governance and modern conservation science"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mb-6">
                The Vision
              </h2>
              <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
                West Papua Care is establishing a groundbreaking community-led
                Marine Protected Area in Misool, Raja Ampat, Indonesia—the heart
                of the Coral Triangle and the most biodiverse marine ecosystem
                on Earth. This 250 km² no-take zone covers the islands and
                archipelagos of Damu, Canpade, Balbulol, Sagof, Efpian, Kasiah,
                and surrounding waters—an area twice the size of Paris city.
              </p>

              <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
                Why Misool, Raja Ampat
              </h2>
              <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
                Misool is a biodiversity hotspot within Raja Ampat, home to 75%
                of the world&apos;s coral species and over 1,600 fish species.
                Its fringing reefs, reef walls, atolls, off-shore reefs, caves
                and underwater rock formations host huge marine biodiversity
                including endemic and key species. It is an important spawning
                ground for corals and fishes.
              </p>
              <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
                The area faces serious threats from cyanide fishing, illegal
                fishers from as far as Sulawesi, sea turtle harvesting, shark
                finning, and past bomb fishing damage. With strong community
                consensus already secured and traditional leaders endorsing the
                project, we have a unique window of opportunity to protect this
                marine treasure before it&apos;s too late.
              </p>

              <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
                Project Goals
              </h2>
              <ul className="list-none p-0 my-6">
                {goals.map((goal, index) => (
                  <li
                    key={index}
                    className="pl-8 mb-4 relative text-lg leading-relaxed text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-burnt-orange)] before:text-[1.5em]"
                  >
                    {goal}
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
                Timeline
              </h2>
              <div className="flex flex-col gap-6 my-8">
                <div className="p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-burnt-orange)] rounded">
                  <strong className="block text-[var(--color-charcoal)] mb-2">
                    2023-2024:
                  </strong>
                  <span className="text-[var(--color-gray)]">
                    Community consultations, baseline surveys, and governance
                    framework establishment
                  </span>
                </div>
                <div className="p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-burnt-orange)] rounded">
                  <strong className="block text-[var(--color-charcoal)] mb-2">
                    2024-2025:
                  </strong>
                  <span className="text-[var(--color-gray)]">
                    MPA Committee formation, patrol systems, and monitoring
                    protocols
                  </span>
                </div>
                <div className="p-6 bg-[var(--color-cream)] border-l-4 border-[var(--color-burnt-orange)] rounded">
                  <strong className="block text-[var(--color-charcoal)] mb-2">
                    2025+:
                  </strong>
                  <span className="text-[var(--color-gray)]">
                    Official designation, ongoing monitoring, and benefit
                    sharing programs
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] mt-12 mb-6">
                Impact to Date
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[var(--color-cream)] p-8 rounded-lg text-center border-2 border-[var(--color-burnt-orange)]"
                  >
                    <div className="font-[var(--font-family-heading)] text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--color-burnt-orange)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-[var(--color-gray)] leading-[1.5]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-4">
                  Get Involved
                </h3>
                <p className="text-lg text-[var(--color-gray)] mb-6">
                  Join us in protecting the Amazon of the Seas through
                  community-led conservation.
                </p>
                <Button variant="cta" size="md" asChild>
                  <Link href="/get-involved">Support This Project</Link>
                </Button>
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="bg-[var(--color-cream)] p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-6">
                  Quick Facts
                </h3>
                <dl className="flex flex-col gap-4">
                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Location
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    Misool, Raja Ampat, West Papua, Indonesia
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Specific Islands
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    Damu, Canpade, Balbulol, Sagof, Efpian, Kasiah
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Area
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    250 km² (no-take zone with 10km buffer)
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Base Camp
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    Cempedak Island
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Communities
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    10+ villages engaged
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Biodiversity
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    75% of world&apos;s coral species
                    <br />
                    1,600+ fish species
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Governance
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] mb-4 leading-[1.5]">
                    Community-led with traditional leaders
                  </dd>

                  <dt className="font-[var(--font-family-heading)] text-sm font-semibold text-[var(--color-burnt-orange)] uppercase tracking-wide">
                    Status
                  </dt>
                  <dd className="text-lg text-[var(--color-gray)] leading-[1.5]">
                    Implementation phase (October 2025)
                  </dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
