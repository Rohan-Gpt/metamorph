"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* --------------------------- Marquee items --------------------------- */
const GROUPS: { logo: string; alt: string; text: string }[] = [
  { logo: "/devfolio-white.png", alt: "Devfolio", text: "Devfolio" },
  { logo: "/ETHIndia.png", alt: "ETHIndia", text: "ETHIndia" },
  {
    logo: "/codecrafters-white.png",
    alt: "CodeCrafters",
    text: "CodeCrafters",
  },
  { logo: "/wolfram.png", alt: "Wolfram", text: "Wolfram" },
  { logo: "/not-zero.png", alt: "Not Zero", text: "Not Zero" },
];

/* -------------------------- Truly Infinite Marquee -------------------------- */
export default function InfiniteMarquee() {
  return (
    <section className="w-full bg-[#583be9] overflow-hidden">
      <div className="relative w-full">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...GROUPS, ...GROUPS].map((group, i) => (
            <div key={i}>
              <GroupSlide {...group} />
              <div className="h-4 w-4 rounded-full bg-white absolute top-4 md:top-5"></div>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div
          className="flex w-max animate-marquee2 absolute top-0 left-0 whitespace-nowrap"
          aria-hidden="true"
        >
          {[...GROUPS, ...GROUPS].map((group, i) => (
            <GroupSlide key={i} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GroupSlide ----------------------------- */
function GroupSlide({
  logo,
  alt,
  text,
}: {
  logo: string;
  alt: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 px-8 py-2 mx-4">
      <Image
        src={logo || "/placeholder.svg"}
        alt={alt}
        width={120}
        height={40}
        className="h-8 md:h-10 w-auto object-contain opacity-100 grayscale-0"
      />
      <span className="text-lg md:text-2xl font-semibold text-white whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
