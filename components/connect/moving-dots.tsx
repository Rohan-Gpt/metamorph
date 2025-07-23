"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "motion/react";

const DOT_COUNT = 100;

type Dot = {
  id: number;
  x: number;
  y: number;
  multiplier: number;
  floatRange: number;
  floatDuration: number;
  parallax: number; // NEW
};

export default function MovingDots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [frame, setFrame] = useState(0);

  // Animate frame for idle sine wave
  useAnimationFrame((t) => {
    if (isIdle) setFrame(t);
  });

  useEffect(() => {
    const newDots: Dot[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        multiplier: Math.random() * 2 - 1,
        floatRange: 2 + Math.random() * 10,
        floatDuration: 1 + Math.random() * 2,
        parallax: 1 + Math.random() * 1.0, // Each dot responds differently
      });
    }
    setDots(newDots);
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Offset normalized between -1 and 1
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setOffset({ x, y });
      setIsIdle(false);

      //   setIsIdle(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsIdle(true), 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black rounded-3xl overflow-hidden shadow-xl mx-auto bg-center bg-cover"
      style={{ backgroundImage: "url('/grid-bg.png')" }}
    >
      {/* Remove the inner bg-[url] wrapper */}
      {dots.map((dot) => {
        const idleX = Math.sin(frame / 500 + dot.id) * dot.floatRange;
        const idleY = Math.cos(frame / 500 + dot.id) * dot.floatRange;

        return (
          <motion.div
            key={dot.id}
            className="absolute bg-white rounded-full"
            style={{
              width: "2px",
              height: "2px",
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={
              isIdle
                ? { x: idleX, y: idleY }
                : {
                    x: offset.x * 40 * dot.parallax + dot.multiplier * 2,
                    y: offset.y * 40 * dot.parallax + dot.multiplier * 2,
                  }
            }
            transition={
              isIdle
                ? { type: "tween", duration: 0.2 }
                : { type: "spring", stiffness: 30, damping: 12 }
            }
          />
        );
      })}
    </div>
  );
}
