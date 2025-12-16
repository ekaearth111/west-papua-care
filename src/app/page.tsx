import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Approach } from "@/components/sections/approach";
import { Challenge } from "@/components/sections/challenge";
import { PartnersCarousel } from "@/components/sections/partners-carousel";
import { CallToAction } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Approach />
      <Challenge />
      <PartnersCarousel />
      <CallToAction />
    </>
  );
}
