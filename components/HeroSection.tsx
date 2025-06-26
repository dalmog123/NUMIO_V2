"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";
import PentagramLogo from "./PentegramLogo";

const HeroSection = memo(() => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-20 xl:pt-16">
    {/* Simplified background gradients - reduced blur for mobile performance */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/15 sm:bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/15 sm:bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        {/* Optimized logo animation - reduced duration and simpler easing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <PentagramLogo className="w-[185px] sm:w-[160px] md:w-[200px] h-auto" />
        </motion.div>

        {/* Optimized headline & paragraph animations */}
        <div className="space-y-6 sm:space-y-8 max-w-[90vw] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.2] break-words mx-auto max-w-[820px]"
          >
            <span className="block">FINANCIAL</span>
            <span className="block">INTELLIGENCE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              REIMAGINED
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
            We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
            done while <span className="text-purple-400 font-semibold">saving time and money</span>.
          </motion.p>
        </div>

        {/* Optimized stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
        >
          {[
            { value: "33%", label: "COST SAVED" },
            { value: "40%", label: "TIME SAVED" },
            { value: "25%", label: "LESS RESOURCES" },
          ].map((item, i) => (
            <div key={i} className="relative group">
              {/* Simplified hover effect - only on larger screens */}
              <div className="pointer-events-none absolute inset-0 bg-white rounded-xl blur opacity-0 md:group-hover:opacity-20 transition-opacity duration-300 w-full h-full" />

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

        {/* Optimized scroll cue - simpler animation */}
        <motion.button
          onClick={() => {
            const focusElement = document.getElementById("focus");
            if (focusElement) {
              focusElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="mt-16 pb-16 mx-auto flex flex-col items-center text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2">DISCOVER OUR MISSION</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

export default HeroSection;