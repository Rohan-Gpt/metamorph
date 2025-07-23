import Image from "next/image";

export default function TopRect() {
  return (
    <div className="w-full h-full">
      <div className="bg-black h-full z-10" />
      <Image
        src={"/top-paper-tear-small.png"}
        width={1920}
        height={1080}
        alt=""
        className=" w-full h-auto object-cover"
      />
    </div>
  );
}
