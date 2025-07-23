"use client";
import Image from "next/image";
import { useEffect, useCallback, useRef, useState, forwardRef } from "react";
import gsap from "gsap";

const NavBar = forwardRef<HTMLDivElement>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false); // NEW
  const [scrolled, setScrolled] = useState(false); // NEW
  const [inHomeSection, setInHomeSection] = useState(true); // NEW
  const circleRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = useCallback(() => setIsOpen(false), []);

  // Scroll event for background blur and home section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Detect if in home section (top 80vh of page)
      setInHomeSection(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to section by ID and close nav
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeNav();
  };

  const navLinks = (
    <>
      <div onClick={() => scrollToSection("about")} className="cursor-pointer">
        About
      </div>
      <div onClick={() => scrollToSection("prizes")} className="cursor-pointer">
        Prizes
      </div>
      <div
        onClick={() => scrollToSection("schedule")}
        className="cursor-pointer"
      >
        Schedule
      </div>
      <div
        onClick={() => scrollToSection("contact")}
        className="cursor-pointer"
      >
        Contact Us
      </div>
    </>
  );

  // Determine nav link color
  const navLinkColor =
    scrolled && inHomeSection ? "text-white" : "text-[#583be9]";

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full ${
        isOpen ? "h-full" : ""
      } z-50 overflow-hidden transition-colors duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-2xl"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav>
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-around items-center p-4 py-6 bg-transparent w-screen">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer transition-all duration-300 ease-in-out -rotate-8 hover:rotate-0 "
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={"/logo-nav.png"}
              width={166}
              height={77}
              alt="Logo"
              className="logo-tilt"
            />
          </div>
          <div
            className={`flex items-center justify-between space-x-7 text-xl font-bold ${navLinkColor}`}
          >
            {navLinks}
          </div>
          <div className="w-1/12"></div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden justify-between items-center p-4 bg-transparent w-screen">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer transition-all duration-300 ease-in-out -rotate-8 hover:rotate-0 "
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={"/logo-nav.png"}
              width={120}
              height={56}
              alt="Logo"
              className="logo-tilt"
            />
          </div>
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
          className={`absolute top-16 right-4 left-4 mx-auto z-50 flex flex-col items-center space-y-6 bg-black bg-opacity-95 rounded-xl shadow-lg text-2xl font-semibold transition-opacity duration-400 ${
            showOverlay
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } py-6 ${navLinkColor}`}
          style={{ maxWidth: 320 }}
        >
          {navLinks}
        </div>
      )}
      {/* Add this CSS for the tilt effect */}
      <style jsx global>{`
        .logo-tilt {
          transform: rotate(-8deg);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-tilt:hover {
          transform: rotate(0deg);
        }
      `}</style>
    </div>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
