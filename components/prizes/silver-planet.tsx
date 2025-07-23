"use client";

import { Crown, Medal, Star } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function SilverPlanet() {
  return (
    <div className="relative group order-2 lg:order-1">
      {/* Outer Ring */}
      <div className="w-80 h-80 rounded-full border-4 border-gray-400 p-1 shadow-2xl animate-float-slow shadow-[0_0_100px_rgba(192,192,192,0.4)] relative">
        {/* Floating Animation */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500 transition-all duration-500 ease-out group-hover:inset-0 shadow-[0_0_100px_rgba(192,192,192,0.6)] group-hover:shadow-[0_0_120px_rgba(192,192,192,0.6)] overflow-visible">
          <Crown className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 text-gray-700 drop-shadow-lg transition-all duration-500" />
          <div className="h-full flex flex-col items-center justify-center text-center p-6 relative group-hover:scale-110 transition-transform duration-300">
            <div className="mt-2 space-y-4">
              <p className="text-gray-700 text-4xl font-bold">₹10,000</p>
              <div className="flex items-center justify-center gap-2">
                <FaStar className="text-white text-2xl" />
                <FaStar className="text-white text-2xl" />
              </div>

              <p className="text-gray-700 text-xl font-bold mb-4">Nebula</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
