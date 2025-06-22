"use client";

import ScrollLink from "@/components/ScrollLink";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold text-sm">
            N
          </div>
          <div>
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NUMIO
            </span>
            <p className="text-xs text-zinc-400">FINANCIAL INTELLIGENCE</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <ScrollLink
            href="#products"
            className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            PRODUCTS
          </ScrollLink>
          <ScrollLink
            href="#platform"
            className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            PLATFORM
          </ScrollLink>
          <ScrollLink
            href="#team"
            className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            TEAM
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            CONTACT
          </ScrollLink>
          <ScrollLink href="#contact">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold"
              asChild
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE DEMO
              </a>
            </Button>
          </ScrollLink>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
