import Approach from "@/components/approach";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Metrics from "@/components/metrics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bioslogo/35 mt-[72px]">
      <Hero />
      <Approach />
      <Metrics />
    </main>
  );
}
