import Image from "next/image";
import HeroSection from "./components/hero/hero";
import Prizes from "./components/prizes/prizes";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <HeroSection />
      <Prizes />
    </div>
  );
}
