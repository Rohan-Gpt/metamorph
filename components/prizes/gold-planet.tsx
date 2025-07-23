"use client";

import { Crown, Trophy } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function GoldPlanet() {
  return (
    <div className="relative group order-1 lg:order-2 scale-110">
      {/* Outer Ring */}
      <div className="w-80 h-80 rounded-full border-4 border-yellow-400 p-1 shadow-2xl animate-float shadow-[0_0_100px_rgba(255,215,0,0.4)] relative">
        <div className="w-full h-full rounded-full bg-transparent relative overflow-visible">
          {/* Floating Animation */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 transition-all duration-500 ease-out group-hover:inset-0 shadow-[0_0_100px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_120px_rgba(255,215,0,0.5)] overflow-visible">
            <Crown className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 text-yellow-500 drop-shadow-lg transition-all duration-500" />
            <div className="h-full flex flex-col items-center justify-center text-center p-6 relative group-hover:scale-110 transition-all duration-300">
              <div className="mt-4 space-y-4">
                <p className="text-yellow-700 text-5xl font-bold">₹25,000</p>
                <div className="flex items-center justify-center gap-2">
                  <FaStar className="text-white text-2xl" />
                  <FaStar className="text-white text-2xl" />
                  <FaStar className="text-white text-2xl" />
                </div>
                <p className="text-yellow-700 text-2xl font-bold">SuperNova</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
