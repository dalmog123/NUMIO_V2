"use client";

import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import PentagramLogo from "./PentegramLogo";

// Lazy load the stats section
const LazyLoadStats = dynamic(() => import("./LazyLoadStats"), { ssr: false });

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-20 xl:pt-16">
    {/* Background gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
    <div className="absolute inset-0 z-0">
      {/* Less intensive blur on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center will-change-transform"
        >
          <PentagramLogo className="w-[185px] sm:w-[160px] md:w-[200px] h-auto" />
        </motion.div>

        {/* Headline & Paragraph */}
        <div className="space-y-6 sm:space-y-8 max-w-[90vw] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.2] break-words mx-auto max-w-[820px]"
          >
            <span className="block">FINANCIAL</span>
            <span className="block">INTELLIGENCE</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              REIMAGINED
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">
              tax and accounting compliance
            </span>{" "}
            is easier than ever. We help{" "}
            <span className="text-blue-400 font-semibold">
              accounting professionals
            </span>{" "}
            get more things done while{" "}
            <span className="text-purple-400 font-semibold">
              saving time and money
            </span>
            .
          </motion.p>
        </div>

        {/* Lazy-loaded Stats */}
        <LazyLoadStats />

        {/* Scroll cue */}
        <motion.button
          onClick={() => {
            document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 pb-16 mx-auto flex flex-col items-center text-white dark:text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors"
        >
          <span className="text-sm mb-2">DISCOVER OUR MISSION</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  </section>
);

export default HeroSection;
