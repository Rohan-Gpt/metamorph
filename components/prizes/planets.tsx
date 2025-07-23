"use client";

import BronzePlanet from "./bronze-planet";
import GoldPlanet from "./gold-planet";
import SilverPlanet from "./silver-planet";

export default function Planets() {
  return (
    <div className="relative min-h-screen bg-transparent px-4 pt-32 pb-32 sm:py-20">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 ">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text  ">
            Cosmic Champions
          </h2>
          <p className="text-xl text-gray-300">
            Journey through the galaxy of excellence
          </p>
        </div>

        <div className="relative h-full sm:h-[450px] w-full">
          {/* Desktop layout */}
          <div className="hidden sm:block w-full h-full">
            {/* 1st element: center left */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-1/3">
              <SilverPlanet />
            </div>
            {/* 2nd element: center top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-1/3">
              <GoldPlanet />
            </div>
            {/* 3rd element: bottom right */}
            <div className="absolute right-0 bottom-0 flex justify-center items-center w-1/3">
              <BronzePlanet />
            </div>
          </div>
          {/* Mobile layout */}
          <div className="flex flex-col items-center justify-center gap-6 sm:hidden w-full h-full">
            <div className="w-2/3 flex justify-center">
              <GoldPlanet />
            </div>
            <div className="w-2/3 flex justify-center">
              <SilverPlanet />
            </div>
            <div className="w-2/3 flex justify-center">
              <BronzePlanet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
