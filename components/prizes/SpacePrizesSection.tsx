"use client";

import { motion } from "motion/react";
import { Trophy, Medal, Award, Star, Crown } from "lucide-react";

export default function SpacePrizesSection() {
  const prizes = [
    {
      place: "1st",
      title: "Gold Planet",
      prize: "₹25,000",
      color: "from-yellow-400 via-yellow-500 to-yellow-600",
      shadowColor: "shadow-yellow-500/50",
      glowColor: "shadow-yellow-400/30",
      size: "w-80 h-80",
      icon: Crown,
      delay: 0.2,
    },
    {
      place: "2nd",
      title: "Silver Moon",
      prize: "₹15,000",
      color: "from-gray-300 via-gray-400 to-gray-500",
      shadowColor: "shadow-gray-400/50",
      glowColor: "shadow-gray-300/30",
      size: "w-64 h-64",
      icon: Medal,
      delay: 0.4,
    },
    {
      place: "3rd",
      title: "Bronze Asteroid",
      prize: "₹10,000",
      color: "from-orange-400 via-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/50",
      glowColor: "shadow-orange-400/30",
      size: "w-52 h-52",
      icon: Award,
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950/10 via-purple-950/10 to-black/10 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Nebula effects - hide or shrink on mobile */}
      <div className="absolute top-20 left-20 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse hidden xs:block" />
      <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse hidden xs:block" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-3xl hidden xs:block" />

      <div className="relative z-10 container mx-auto px-2 sm:px-4 py-8 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Cosmic Prizes
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-xs sm:max-w-2xl mx-auto">
            Journey through the galaxy and claim your stellar rewards
          </p>
        </motion.div>

        {/* Prizes Grid */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center md:items-end gap-6 sm:gap-8 lg:gap-16">
          {/* Second place - left */}
          {(() => {
            const prize = prizes[1]; // Second place
            const index = 1;
            const IconComponent = prize.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: prize.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group"
              >
                {/* Rest of the planet code remains the same */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`${prize.size} sm:${prize.size} xs:w-40 xs:h-40 relative`}
                >
                  {/* Planet glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${prize.color} blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 ${prize.glowColor} shadow-2xl`}
                  />

                  {/* Planet surface */}
                  <div
                    className={`relative w-full h-full rounded-full bg-gradient-to-br ${prize.color} ${prize.shadowColor} shadow-2xl border-4 border-white/20 overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                  >
                    {/* All the texture and content code remains the same */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-40" />

                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/6 left-1/4 w-16 h-12 bg-black/30 rounded-full blur-sm transform rotate-12" />
                      <div className="absolute top-1/2 right-1/6 w-20 h-8 bg-black/25 rounded-full blur-sm transform -rotate-45" />
                      <div className="absolute bottom-1/4 left-1/3 w-12 h-16 bg-black/20 rounded-full blur-sm transform rotate-45" />
                      <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-black/40 rounded-full blur-sm" />
                      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-black/35 rounded-full blur-sm" />
                      <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute top-1/5 right-1/4 w-4 h-4 bg-black/45 rounded-full blur-sm" />
                      <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-black/25 rounded-full blur-sm" />
                      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute bottom-1/6 right-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm" />
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full blur-md opacity-60" />

                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-1/3 left-0 right-0 h-px bg-black/40 transform rotate-12 blur-sm" />
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-black/30 transform -rotate-12 blur-sm" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-black/25 transform rotate-6 blur-sm" />
                    </div>

                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 60,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/20 rounded-full"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + Math.sin(i) * 20}%`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {index === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/15 via-transparent to-gray-600/20 rounded-full" />
                    )}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="mb-4"
                      >
                        <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                      </motion.div>

                      <motion.div
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: prize.delay + 0.3 }}
                      >
                        <motion.div
                          className="text-2xl xs:text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {prize.place}
                        </motion.div>
                        <motion.div
                          className="text-lg xs:text-base sm:text-lg font-semibold mb-2 drop-shadow-lg"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 0.5,
                          }}
                        >
                          {prize.title}
                        </motion.div>
                        <motion.div
                          className="text-3xl xs:text-xl sm:text-3xl font-bold drop-shadow-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.9, 1, 0.9],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 1,
                          }}
                        >
                          {prize.prize}
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1.1, 1.15, 1.1],
                      }}
                      transition={{
                        rotate: {
                          duration: 15 + index * 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute inset-0 border-2 border-white/30 rounded-full"
                      style={{
                        transform: "scale(1.1)",
                        borderStyle: "dashed",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      }}
                    />

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border border-white/20 rounded-full"
                      style={{
                        transform: "scale(1.2)",
                        borderStyle: "dotted",
                      }}
                    />
                  </div>

                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180), 0],
                        y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180), 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prize.delay + 0.5 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-semibold">
                      {prize.place} Place
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}

          {/* First place - center (elevated) */}
          {(() => {
            const prize = prizes[0]; // First place
            const index = 0;
            const IconComponent = prize.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: prize.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group"
                style={{ marginBottom: "2rem" }} // Elevate the first place
              >
                {/* Same planet structure but for first place */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`${prize.size} sm:${prize.size} xs:w-48 xs:h-48 relative`}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${prize.color} blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 ${prize.glowColor} shadow-2xl`}
                  />

                  <div
                    className={`relative w-full h-full rounded-full bg-gradient-to-br ${prize.color} ${prize.shadowColor} shadow-2xl border-4 border-white/20 overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-40" />

                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/6 left-1/4 w-16 h-12 bg-black/30 rounded-full blur-sm transform rotate-12" />
                      <div className="absolute top-1/2 right-1/6 w-20 h-8 bg-black/25 rounded-full blur-sm transform -rotate-45" />
                      <div className="absolute bottom-1/4 left-1/3 w-12 h-16 bg-black/20 rounded-full blur-sm transform rotate-45" />
                      <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-black/40 rounded-full blur-sm" />
                      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-black/35 rounded-full blur-sm" />
                      <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute top-1/5 right-1/4 w-4 h-4 bg-black/45 rounded-full blur-sm" />
                      <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-black/25 rounded-full blur-sm" />
                      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute bottom-1/6 right-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm" />
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full blur-md opacity-60" />

                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-1/3 left-0 right-0 h-px bg-black/40 transform rotate-12 blur-sm" />
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-black/30 transform -rotate-12 blur-sm" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-black/25 transform rotate-6 blur-sm" />
                    </div>

                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 60,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/20 rounded-full"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + Math.sin(i) * 20}%`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-yellow-800/20 rounded-full" />
                    )}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="mb-4"
                      >
                        <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                      </motion.div>

                      <motion.div
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: prize.delay + 0.3 }}
                      >
                        <motion.div
                          className="text-2xl xs:text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {prize.place}
                        </motion.div>
                        <motion.div
                          className="text-lg xs:text-base sm:text-lg font-semibold mb-2 drop-shadow-lg"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 0.5,
                          }}
                        >
                          {prize.title}
                        </motion.div>
                        <motion.div
                          className="text-5xl xs:text-2xl sm:text-5xl font-bold drop-shadow-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.9, 1, 0.9],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 1,
                          }}
                        >
                          {prize.prize}
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1.1, 1.15, 1.1],
                      }}
                      transition={{
                        rotate: {
                          duration: 15 + index * 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute inset-0 border-2 border-white/30 rounded-full"
                      style={{
                        transform: "scale(1.1)",
                        borderStyle: "dashed",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      }}
                    />

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border border-white/20 rounded-full"
                      style={{
                        transform: "scale(1.2)",
                        borderStyle: "dotted",
                      }}
                    />
                  </div>

                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180), 0],
                        y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180), 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prize.delay + 0.5 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center "
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-semibold">
                      {prize.place} Place
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}

          {/* Third place - right */}
          {(() => {
            const prize = prizes[2]; // Third place
            const index = 2;
            const IconComponent = prize.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: prize.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group"
              >
                {/* Same structure as second place but for third place */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className={`${prize.size} sm:${prize.size} xs:w-32 xs:h-32 relative`}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${prize.color} blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 ${prize.glowColor} shadow-2xl`}
                  />

                  <div
                    className={`relative w-full h-full rounded-full bg-gradient-to-br ${prize.color} ${prize.shadowColor} shadow-2xl border-4 border-white/20 overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-40" />

                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/6 left-1/4 w-16 h-12 bg-black/30 rounded-full blur-sm transform rotate-12" />
                      <div className="absolute top-1/2 right-1/6 w-20 h-8 bg-black/25 rounded-full blur-sm transform -rotate-45" />
                      <div className="absolute bottom-1/4 left-1/3 w-12 h-16 bg-black/20 rounded-full blur-sm transform rotate-45" />
                      <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-black/40 rounded-full blur-sm" />
                      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-black/35 rounded-full blur-sm" />
                      <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute top-1/5 right-1/4 w-4 h-4 bg-black/45 rounded-full blur-sm" />
                      <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-black/25 rounded-full blur-sm" />
                      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-black/30 rounded-full blur-sm" />
                      <div className="absolute bottom-1/6 right-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm" />
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full blur-md opacity-60" />

                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-1/3 left-0 right-0 h-px bg-black/40 transform rotate-12 blur-sm" />
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-black/30 transform -rotate-12 blur-sm" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-black/25 transform rotate-6 blur-sm" />
                    </div>

                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 60,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/20 rounded-full"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + Math.sin(i) * 20}%`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {index === 2 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-red-200/15 via-transparent to-orange-800/20 rounded-full" />
                    )}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="mb-4"
                      >
                        <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                      </motion.div>

                      <motion.div
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: prize.delay + 0.3 }}
                      >
                        <motion.div
                          className="text-2xl xs:text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {prize.place}
                        </motion.div>
                        <motion.div
                          className="text-lg xs:text-base sm:text-lg font-semibold mb-2 drop-shadow-lg"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 0.5,
                          }}
                        >
                          {prize.title}
                        </motion.div>
                        <motion.div
                          className="text-xl xs:text-lg sm:text-xl font-bold drop-shadow-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.9, 1, 0.9],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 1,
                          }}
                        >
                          {prize.prize}
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1.1, 1.15, 1.1],
                      }}
                      transition={{
                        rotate: {
                          duration: 15 + index * 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute inset-0 border-2 border-white/30 rounded-full"
                      style={{
                        transform: "scale(1.1)",
                        borderStyle: "dashed",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      }}
                    />

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border border-white/20 rounded-full"
                      style={{
                        transform: "scale(1.2)",
                        borderStyle: "dotted",
                      }}
                    />
                  </div>

                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180), 0],
                        y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180), 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prize.delay + 0.5 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-semibold">
                      {prize.place} Place
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
