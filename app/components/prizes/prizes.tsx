import SpacePrizesSection from "./SpacePrizesSection";
import ScrollMarquee from "./sponsorMarquee";

export default function Prizes() {
  return (
    <div className="flex flex-col w-screen h-screen bg-black">
      <div className="mb-10"></div>
      <div style={{ transform: "rotate(-2deg)" }} className="z-50">
        <ScrollMarquee />
      </div>
      <SpacePrizesSection />
    </div>
  );
}
