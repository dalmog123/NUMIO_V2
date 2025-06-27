"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PentagramLogo from "./PentegramLogo";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-20 xl:pt-16">
      {/* Simplified background gradients for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-64 h-64 blur-xl' : 'w-96 h-96 blur-3xl'} bg-cyan-500/20 rounded-full`} />
        <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-64 h-64 blur-xl' : 'w-96 h-96 blur-3xl'} bg-blue-500/20 rounded-full`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Simplified logo animation for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: isMobile ? 0.95 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.6 : 1.2, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <PentagramLogo className="w-[185px] sm:w-[160px] md:w-[200px] h-auto" />
          </motion.div>

          {/* Simplified animations for mobile */}
          <div className="space-y-6 sm:space-y-8 max-w-[90vw] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 20 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              // Remove viewport trigger on mobile for better performance
              viewport={!isMobile ? { once: true, amount: 0.8 } : undefined}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.15] lg:leading-[1.2] break-words mx-auto max-w-[820px]"
            >
              <span className="block">FINANCIAL</span>
              <span className="block">INTELLIGENCE</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                REIMAGINED
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={!isMobile ? { once: true } : undefined}
              transition={{ duration: isMobile ? 0.5 : 0.9, delay: isMobile ? 0.1 : 0.3 }}
              className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            >
              With Numio's product suite,{" "}
              <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
              We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
              done while <span className="text-purple-400 font-semibold">saving time and money</span>.
            </motion.p>
          </div>

          {/* Stats with reduced animation complexity on mobile */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={!isMobile ? { once: true } : undefined}
            transition={{ duration: isMobile ? 0.5 : 0.9, delay: isMobile ? 0.2 : 0.5 }}
            className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
          >
            {[
              { value: "33%", label: "COST SAVED" },
              { value: "40%", label: "TIME SAVED" },
              { value: "25%", label: "LESS RESOURCES" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {/* Disable aura effect on mobile */}
                <div className={`pointer-events-none absolute inset-0 bg-white rounded-xl blur opacity-20 ${isMobile ? '' : 'sm:group-hover:opacity-40'} transition-opacity w-full h-full`} />

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

          {/* Simplified scroll cue animation on mobile */}
          <motion.button
            onClick={() => {
              document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={isMobile ? {} : { y: [0, 10, 0] }}
            transition={isMobile ? {} : { repeat: Infinity, duration: 2 }}
            className="mt-16 pb-16 mx-auto flex flex-col items-center text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm mb-2">DISCOVER OUR MISSION 22</span>
            <ChevronDown className={`h-6 w-6 ${isMobile ? '' : 'animate-bounce'}`} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;