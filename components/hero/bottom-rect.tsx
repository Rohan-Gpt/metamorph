import Image from "next/image";

export default function BottomRect() {
  return (
    <div className="w-full h-full">
      <Image
        src={"/bottom-paper-tear-small.png"}
        width={1920}
        height={1080}
        alt="Bottom Rect"
        className="w-full h-auto object-cover"
      />
      <div className="bg-black h-full z-10" />
    </div>
  );
}
