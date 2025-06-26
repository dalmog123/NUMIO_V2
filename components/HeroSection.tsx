"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import PentagramLogo from "./PentegramLogo"; // NO dynamic import

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Static background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
      <div className="absolute inset-0 z-0 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <PentagramLogo className="w-[160px] sm:w-[160px] md:w-[200px] h-auto" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight break-words mx-auto max-w-[820px]"
          >
            <span className="block">FINANCIAL</span>
            <span className="block">INTELLIGENCE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              REIMAGINED
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
            We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
            done while <span className="text-purple-400 font-semibold">saving time and money</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
          >
            {[
              { value: "33%", label: "COST SAVED" },
              { value: "40%", label: "TIME SAVED" },
              { value: "25%", label: "LESS RESOURCES" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute inset-0 bg-white rounded-xl blur opacity-20 sm:group-hover:opacity-40 transition-opacity w-full h-full" />
                <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
                  <div className="text-base sm:text-3xl font-black text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-[10px] sm:text-sm text-zinc-400 font-medium h-[28px] sm:h-[32px] flex items-center justify-center text-center">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.button
            onClick={() => {
              document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 pb-16 mx-auto flex flex-col items-center text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm mb-2">DISCOVER OUR MISSION 123</span>
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
