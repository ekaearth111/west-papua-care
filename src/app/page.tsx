import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Approach } from "@/components/sections/approach";
import { Challenge } from "@/components/sections/challenge";
import { StatsBar } from "@/components/sections/stats-bar";
import { PartnersCarousel } from "@/components/sections/partners-carousel";
import { CallToAction } from "@/components/sections/call-to-action";

const stats = [
  { value: "250 km²", label: "Marine area under protection" },
  { value: "10+", label: "Villages with consensus" },
  { value: "75%", label: "Of world's coral species" },
  { value: "1,600+", label: "Fish species documented" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar stats={stats} variant="dark" />
      <Mission />
      <Approach />
      <Challenge />
      <PartnersCarousel />
      <CallToAction />
    </>
  );
}
