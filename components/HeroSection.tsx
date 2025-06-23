"use client";

import ScrollLink from "@/components/ScrollLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { motion } from "framer-motion";
import PentagramLogo from "./PentegramLogo";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-28 md:pt-24 lg:pt-20 xl:pt-16
">
    {/* Background gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 z-0" />
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <PentagramLogo className="w-[185px] sm:w-[160px] md:w-[200px] h-auto" />
        </motion.div>

        {/* Headline & Paragraph */}
        <div className="space-y-6 sm:space-y-8 max-w-[90vw] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
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
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-4 text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
            We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
            done while <span className="text-purple-400 font-semibold">saving time and money</span>.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
        >
          {[
            { value: "33%", label: "COST SAVED" },
            { value: "40%", label: "TIME SAVED" },
            { value: "25%", label: "LESS RESOURCES" },
          ].map((item, i) => (
            <div key={i} className="relative group">
              {/* White blur aura */}
              <div className="absolute inset-0 bg-white rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity w-full h-full"></div>

              {/* Stat card */}
              <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
                <div className="text-base sm:text-3xl font-black text-white">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-sm text-zinc-400 font-medium h-[28px] sm:h-[32px] flex items-center justify-center text-center">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* scroll cue - moved inside the content area */}
        <motion.button
          onClick={() => {
            document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="mt-16 mx-auto flex flex-col items-center text-white dark:text-white bg-transparent cursor-pointer hover:text-cyan-400 transition-colors"
        >
          <span className="text-sm mb-2">DISCOVER OUR MISSION</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>



        {/* Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-row flex-wrap justify-center gap-4 mt-6 px-4 sm:px-0 md:pb-24"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4"
          >
            <ScrollLink href="#products" className="flex items-center gap-2">
              EXPLORE OUR SOLUTIONS
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-zinc-700 text-white bg-transparent hover:bg-zinc-900 px-6 sm:px-8 py-3 sm:py-4"
            asChild
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              SCHEDULE A DEMO
            </a>
          </Button>
        </motion.div> */}
      </div>
    </div>
  </section>
);

export default HeroSection;
