"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import CTA from "./cta";
import TopRect from "./top-rect";
import BottomRect from "./bottom-rect";
// import NavBar from "./navbar"; // Remove local NavBar import

interface HeroSectionProps {
  navbarRef: RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ navbarRef }: HeroSectionProps) {
  const topRectRef = useRef<HTMLDivElement>(null);
  const bottomRectRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  // const navbarRef = useRef<HTMLDivElement>(null); // Remove local navbarRef
  const backgroundRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Example: mobile breakpoint at 768px
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline();

    // Set initial states (can branch if needed)
    gsap.set(topRectRef.current, { y: "0%" });
    gsap.set(bottomRectRef.current, { y: "0%" });
    gsap.set(imageRef.current, { scale: 0.5, x: "0%" });
    gsap.set(videoRef.current, { x: isMobile ? "0%" : "120%" }); // Example: don't slide video on mobile
    if (navbarRef.current) {
      gsap.set(navbarRef.current, { y: "-100%" });
    }
    gsap.set(backgroundRef.current, { scale: 1.2 });

    // Animation sequence
    if (isMobile) {
      // Mobile-specific animation
      tl.to(topRectRef.current, {
        y: "-75%",
        duration: 0.8,
        ease: "power2.inOut",
      })
        .to(
          bottomRectRef.current,
          { y: "55%", duration: 0.8, ease: "power2.inOut" },
          "<"
        )
        .to(
          imageRef.current,
          { scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .to(
          navbarRef.current,
          { y: "0%", duration: 0.8, ease: "power2.inOut" },
          "<"
        );
      // You can skip video animation or do something else
    } else {
      // Desktop animation (your existing logic)
      tl.to(topRectRef.current, {
        y: "-98%",
        duration: 1.2,
        ease: "power2.inOut",
      })
        .to(
          topImageRef.current,
          { y: "-75%", duration: 1.2, ease: "power2.inOut" },
          "<"
        )
        .to(
          bottomRectRef.current,
          { y: "55%", duration: 1.2, ease: "power2.inOut" },
          "<"
        )
        .to(
          bottomImageRef.current,
          { y: "75%", duration: 1.2, ease: "power2.inOut" },
          "<"
        )
        .to(
          imageRef.current,
          { scale: 1.4, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .to(
          backgroundRef.current,
          { scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "<"
        )
        .to(
          imageRef.current,
          { x: "-100%", scale: 1.1, duration: 1, ease: "power2.inOut" },
          "-=0.2"
        )
        .to(
          videoRef.current,
          { x: "-20%", duration: 1, ease: "power2.inOut" },
          "<"
        )
        .to(
          navbarRef.current,
          { y: "0%", duration: 1, ease: "power2.inOut" },
          "<"
        );
    }

    return () => {
      tl.kill();
    };
  }, [navbarRef]);

  const handleVideoLoad = () => {
    // setVideoLoaded(true);
    if (videoElementRef.current) {
      videoElementRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Background image that scales opposite to center image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: "center center" }}
      >
        <Image src="/bg-smaller.png" alt="Background" fill priority />
      </div>

      {/* NavBar removed from here */}

      {/* Top black rectangle */}

      <div
        ref={topRectRef}
        className="absolute top-0 left-0 w-full h-1/2 z-10 bg-red-200"
      >
        <TopRect />
      </div>

      {/* Bottom black rectangle */}
      <div
        ref={bottomRectRef}
        className="absolute bottom-0 left-0 w-full h-1/2 z-10"
      >
        <BottomRect />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={imageRef} className="overflow-hidden">
          <CTA />
        </div>
      </div>

      {/* Video frame that slides in from right */}
      <div
        ref={videoRef}
        className="absolute hidden md:block bg-black right-10 top-1/2 transform -translate-y-1/2 w-[600px] h-[340px] rounded-lg overflow-hidden drop-shadow-2xl"
      >
        <div className="relative w-full h-full">
          {/* Video element */}
          <video
            ref={videoElementRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
          >
            <source src="/placeholder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Thumbnail image - shown until video loads */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 shadow-lg ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src="/thumbnail.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content that appears after animation */}
      {/* <div className="absolute inset-0 flex items-center justify-end pr-20">
        <div className="max-w-md text-right">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Creative
            <br />
            <span className="text-gray-600">Vision</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Bringing ideas to life through innovative design and seamless user
            experiences.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Explore Work
          </button>
        </div>
      </div> */}
    </div>
  );
}
