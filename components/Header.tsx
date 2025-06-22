"use client";

import ScrollLink from "@/components/ScrollLink";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import PentagramLogo from "./PentegramLogo";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleScroll = () => setMenuOpen(false);
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("touchmove", handleScroll, { passive: true });
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-zinc-800 ${menuOpen ? "bg-transparent" : "bg-black/80 backdrop-blur-xl"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold text-sm">
              <Image
                src="/assets/NumioLogo.png"
                alt="Pentagram Logo"
                width={150}
                height={150}
                priority
              />
            </div>
            <div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NUMIO
              </span>
              <p className="text-xs text-zinc-400">FINANCIAL INTELLIGENCE</p>
            </div>
          </div>
          {/* Desktop nav */}
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
          </nav>
          {/* Mobile hamburger or close button */}
          {!menuOpen ? (
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* Mobile dropdown menu with overlay */}
      {/* Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9998] bg-black/30"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Dropdown menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 w-full bg-zinc-900 border-b border-zinc-800 shadow-2xl z-[9999] flex flex-col items-center py-6 space-y-6 transition-all duration-300 ${menuOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none"
          }`}
        style={{ overscrollBehavior: "contain" }}
      >
        <div onClick={() => setMenuOpen(false)}>
          <ScrollLink
            href="#products"
            className="text-lg font-semibold text-zinc-100 hover:text-cyan-400 transition-colors"
          >
            PRODUCTS
          </ScrollLink>
        </div>
        <div onClick={() => setMenuOpen(false)}>
          <ScrollLink
            href="#platform"
            className="text-lg font-semibold text-zinc-100 hover:text-cyan-400 transition-colors"
          >
            PLATFORM
          </ScrollLink>
        </div>
        <div onClick={() => setMenuOpen(false)}>
          <ScrollLink
            href="#team"
            className="text-lg font-semibold text-zinc-100 hover:text-cyan-400 transition-colors"
          >
            TEAM
          </ScrollLink>
        </div>
        <div onClick={() => setMenuOpen(false)}>
          <ScrollLink
            href="#contact"
            className="text-lg font-semibold text-zinc-100 hover:text-cyan-400 transition-colors"
          >
            CONTACT
          </ScrollLink>
        </div>
        <Button
          size="lg"
          className="w-11/12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold"
          asChild
        >
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            SCHEDULE DEMO
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
