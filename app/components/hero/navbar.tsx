"use client";
import Image from "next/image";
import { useEffect, useCallback, useRef, useState } from "react";
import gsap from "gsap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false); // NEW
  const circleRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = useCallback(() => setIsOpen(false), []);

  // Animate circle and handle overlay timing
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const diameter = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2
    );

    if (isOpen) {
      gsap.set(circle, {
        width: 0,
        height: 0,
        opacity: 1,
      });
      gsap.to(circle, {
        width: diameter * 2,
        height: diameter * 2,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => setOverlayVisible(true), // Show overlay at start
        onComplete: () => setShowOverlay(true), // Show nav links after animation
      });
    } else {
      setShowOverlay(false); // Hide nav links immediately
      gsap.to(circle, {
        width: 0,
        height: 0,
        opacity: 100,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setOverlayVisible(false), // Hide overlay after fade out
      });
    }
  }, [isOpen]);

  // Close nav on ESC key
  useEffect(() => {
    
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeNav]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = (
    <>
      <div onClick={closeNav} className="cursor-pointer">
        About
      </div>
      <div onClick={closeNav} className="cursor-pointer">
        Prizes
      </div>
      <div onClick={closeNav} className="cursor-pointer">
        Schedule
      </div>
      <div onClick={closeNav} className="cursor-pointer">
        Contact Us
      </div>
    </>
  );

  return (
    <>
      <nav>
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-around items-center p-4 py-6 bg-transparent w-screen">
          <Image src={"/logo-nav.png"} width={166} height={77} alt="Logo" />
          <div className="flex items-center justify-between space-x-7 text-lg font-semibold text-[#583be9]">
            {navLinks}
          </div>
          <div className="w-1/12"></div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden justify-between items-center p-4 bg-transparent w-screen">
          <Image src={"/logo-nav.png"} width={120} height={56} alt="Logo" />
        </div>

        {/* Hamburger/X Button - always visible on mobile */}
        <button
          onClick={toggleNav}
          className="md:hidden fixed top-4 right-4 z-60 flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Top Line */}
          <span
            className={`block w-6 h-0.5 bg-[#583be9] transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : "rotate-0 translate-y-0"
            }`}
          />
          {/* Middle Line */}
          <span
            className={`block w-6 h-0.5 bg-[#583be9] transition-all duration-300 ease-in-out my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`block w-6 h-0.5 bg-[#583be9] transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0"
            }`}
          />
        </button>

        {/* Expanding Circle */}
        <div
          ref={circleRef}
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            width: 0,
            height: 0,
            borderRadius: "50%",
            background: "#000",
            zIndex: 40,
            pointerEvents: "none",
            transform: "translate(50%, -50%)",
            opacity: 100,
          }}
        />
      </nav>
      {overlayVisible && (
    <div
      className={`absolute top-16 right-4 left-4 mx-auto z-50 flex flex-col items-center space-y-6 bg-black bg-opacity-95 rounded-xl shadow-lg text-2xl font-semibold text-[#583be9] transition-opacity duration-400 ${
        showOverlay
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } py-6`}
      style={{ maxWidth: 320 }}
    >
      {navLinks}
    </div>
  )}
    </>
  );
}
