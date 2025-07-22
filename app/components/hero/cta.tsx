import Image from "next/image";

export default function CTA() {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <Image
        src="/logo-center.png"
        width={432}
        height={201}
        alt="METAMORPH"
        className="drop-shadow-violet-700 drop-shadow-xl"
      ></Image>
      <div className="flex justify-center items-center space-x-4 mt-8 drop-shadow-violet-700 drop-shadow-lg text-xs md:text-lg font-semibold">
        <a
          href="https://metamorph.devfolio.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 bg-black rounded-lg px-4 md:px-8  py-4 md:py-2 shadow-md text-white">
            <Image
              src="/devfolio-white.png"
              width={18}
              height={14}
              alt="Apply with Devfolio"
              className="object-contain"
            />
            Apply With Devfolio
          </div>
        </a>

        <a
          href="https://discord.gg/86gecbgEzD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 bg-black rounded-lg px-4 md:px-8 py-4 md:py-2 shadow-md text-white">
            <Image
              src={"/discord-white.png"}
              width={23}
              height={14}
              alt=""
            ></Image>
            <span className="text-white">Join Discord</span>
          </div>
        </a>
      </div>
    </div>
  );
}
