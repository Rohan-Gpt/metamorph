"use client";

import { Award, Crown } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function BronzePlanet() {
  return (
    <div className="relative group order-3">
      {/* Outer Ring */}
      <div className="w-72 h-72 rounded-full border-4 border-orange-500 p-1 shadow-2xl animate-float-reverse shadow-[0_0_100px_rgba(205,133,63,0.4)] relative">
        <div className="w-full h-full rounded-full bg-transparent relative overflow-visible">
          {/* Floating Animation */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-200 via-orange-300 to-orange-500 transition-all duration-500 ease-out group-hover:inset-0 shadow-[0_0_100px_rgba(205,133,63,0.6)] group-hover:shadow-[0_0_140px_rgba(205,133,63,0.6)] overflow-visible">
            <Crown className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 text-orange-700 drop-shadow-lg transition-all duration-500" />
            <div className="h-full flex flex-col items-center justify-center text-center p-6 relative group-hover:scale-110 transition-transform duration-300">
              <div className="mt-1 space-y-4">
                <p className="text-orange-700 text-3xl font-bold">₹15,000</p>
                <div className="flex items-center justify-center gap-2">
                  <FaStar className="text-white text-2xl" />
                </div>
                <p className="text-orange-700 text-xl font-bold mb-4">Astro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
