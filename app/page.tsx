"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import HeroSection from "../components/hero/hero";
import NavBar from "../components/hero/navbar";
import LazyLoadWrapper from "../components/lazyLoadWrapper";

// Dynamically import sections
const Prizes = dynamic(() => import("../components/prizes/prizes"), {
  ssr: false,
});
const Connect = dynamic(() => import("../components/connect/connect"), {
  ssr: false,
});

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-black">
      <NavBar ref={navbarRef} />
      <section id="home" className="overflow-hidden">
        <HeroSection navbarRef={navbarRef} />
      </section>
      <section id="prizes" className="overflow-hidden">
        <LazyLoadWrapper>
          <Prizes />
        </LazyLoadWrapper>
      </section>

      <LazyLoadWrapper>
        <Connect />
      </LazyLoadWrapper>
    </div>
  );
}
