import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Challenge } from "@/components/sections/challenge";
import { CallToAction } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Challenge />
      <CallToAction />
    </>
  );
}
