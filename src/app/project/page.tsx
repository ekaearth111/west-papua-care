import type { Metadata } from "next";
import Image from "next/image";
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

export default function ProjectPage() {
  return (
    <>
      <PageHero
        label="PROJECT OVERVIEW"
        title="Community-Led Marine Protected Area"
        subtitle="Establishing a 250 km² no-take zone in Misool, Raja Ampat through traditional governance and modern conservation science"
      />

      {/* Hero Image */}
      <section className="bg-[var(--color-off-white)] pt-8 lg:pt-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
            <Image
              src="/west-papua-care/images/project.jpg"
              alt="Aerial view of Misool's pristine islands and coral reefs"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <h2 className="mb-8">The Vision</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
            West Papua Care is establishing a groundbreaking community-led
            Marine Protected Area in Misool, Raja Ampat, Indonesia, the heart
            of the Coral Triangle and the most biodiverse marine ecosystem
            on Earth. This 250 km² no-take zone covers the islands and
            archipelagos of Damu, Canpade, Balbulol, Sagof, Efpian, Kasiah,
            and surrounding waters, an area twice the size of Paris city.
          </p>

          <h2 className="mt-16 mb-8">Why Misool, Raja Ampat</h2>
          <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
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

          <h2 className="mt-16 mb-8">Project Goals</h2>
          <ul className="list-none p-0 my-8">
            {goals.map((goal, index) => (
              <li
                key={index}
                className="pl-8 mb-4 relative text-lg leading-relaxed text-[var(--color-gray)] before:content-['•'] before:absolute before:left-0 before:text-[var(--color-navy-accent)] before:font-bold"
              >
                {goal}
              </li>
            ))}
          </ul>

          <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-16 flex flex-col items-center justify-center gap-4 text-balance w-full">
            <h3 className="text-center mb-4">Get Involved</h3>
            <p className="text-center text-lg text-[var(--color-gray)] mb-6">
              Join us in protecting the Amazon of the Seas through
              community-led conservation.
            </p>
            <Button variant="cta" size="md" asChild>
              <Link href="/get-involved">Support This Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
