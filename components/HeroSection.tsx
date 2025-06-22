"use client";

import ScrollLink from "@/components/ScrollLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[80vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden pt-0 sm:pt-8 lg:pt-16 pb-0">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <div className="space-y-1 sm:space-y-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs xs:text-sm sm:text-base font-medium whitespace-nowrap max-w-full overflow-x-auto">
            <Zap className="w-4 h-4" />
            POWERED BY AI • BUILT FOR PROFESSIONALS
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight break-words max-w-full">
            <span className="block">FINANCIAL</span>
            <span className="block">INTELLIGENCE.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              REIMAGINED.
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            With Numio's product suite,{" "}
            <span className="text-cyan-400 font-semibold">tax and accounting compliance</span> is easier than ever.
            We help <span className="text-blue-400 font-semibold">accounting professionals</span> get more things
            done while <span className="text-purple-400 font-semibold">saving time and money</span>.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-2 sm:gap-6 mt-2 sm:mt-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity w-full h-full"></div>
            <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:max-w-none sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="text-base sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                33%
              </div>
              <div className="text-[10px] sm:text-sm text-zinc-400 font-medium">COST SAVED</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity w-full h-full"></div>
            <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:max-w-none sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="text-base sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                40%
              </div>
              <div className="text-[10px] sm:text-sm text-zinc-400 font-medium">TIME SAVED</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity w-full h-full"></div>
            <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:max-w-none sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="text-base sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                25%
              </div>
              <div className="text-[10px] sm:text-sm text-zinc-400 font-medium">LESS RESOURCES</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-2 sm:mt-4 mb-0 pb-0">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold px-8 py-4"
          >
            <ScrollLink href="#products" className="flex items-center gap-2">
              EXPLORE OUR SOLUTIONS
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-zinc-700 text-white bg-transparent hover:bg-zinc-900 px-8 py-4"
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
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
