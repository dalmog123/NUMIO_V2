"use client";

import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Lazy load logo
const PentagramLogo = dynamic(() => import("./PentegramLogo"), {
  ssr: false,
  loading: () => <div className="w-[160px] h-[80px] bg-zinc-700 rounded-lg" />, // fallback
});

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-20 xl:pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-xl" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={!isMobile ? container : undefined}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            variants={!isMobile ? item : undefined}
            className="mb-8 flex justify-center"
          >
            <PentagramLogo className="w-[160px] sm:w-[160px] md:w-[200px] h-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={!isMobile ? item : undefined}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.2] break-words mx-auto max-w-[820px]"
          >
            <span className="block">FINANCIAL</span>
            <span className="block">INTELLIGENCE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              REIMAGINED
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={!isMobile ? item : undefined}
            className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
            We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
            done while <span className="text-purple-400 font-semibold">saving time and money</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={!isMobile ? item : undefined}
            className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
          >
            {[
              { value: "33%", label: "COST SAVED" },
              { value: "40%", label: "TIME SAVED" },
              { value: "25%", label: "LESS RESOURCES" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="pointer-events-none absolute inset-0 bg-white rounded-xl blur opacity-20 sm:group-hover:opacity-40 transition-opacity w-full h-full"></div>
                <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
                  <div className="text-base sm:text-3xl font-black text-white mb-2">{item.value}</div>
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
            animate={!isMobile ? { y: [0, 10, 0] } : undefined}
            transition={!isMobile ? { repeat: Number.POSITIVE_INFINITY, duration: 2 } : undefined}
            className="mt-16 pb-16 mx-auto flex flex-col items-center text-white dark:text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm mb-2">DISCOVER OUR MISSION</span>
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
