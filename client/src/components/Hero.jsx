import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/hero1.jpg";


export default function Hero() {
  return (
    <section
      className="relative h-[95vh] w-full flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Layered Gradient for Cinematic Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-green-900/40"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* Center Spotlight Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-green-300/20 via-transparent to-transparent"></div>

      {/* Floating glowing orbs */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-16 left-14 w-52 h-52 bg-green-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 35, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"
      />

      {/* Floating leaf particles */}
      {/* {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute text-green-200 text-xl"
          style={{
            top: `${20 + i * 6}%`,
            left: `${10 + i * 8}%`,
          }}
        >
          🍃
        </motion.div>
      ))} */}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-8 max-w-4xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl"
        >
          Transform Your Outdoors with{" "}
          <span className="text-green-400">GreenGroups</span>
        </motion.h1>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          Premium landscaping, synthetic turf installation, and modern exterior design solutions crafted with precision, creativity, and care.
        </motion.p>


        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-10 flex justify-center gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition shadow-xl font-semibold text-white tracking-wide"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition shadow-lg font-semibold text-white tracking-wide"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
