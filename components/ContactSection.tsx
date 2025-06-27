import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 break-words">
          EXPERIENCE THE FUTURE OF
          <span className="block sm:inline bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> FINANCIAL INTELLIGENCE</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-10 sm:mb-16 leading-relaxed">
          Schedule a personalized walkthrough and discover how Numio's suite of solutions can transform your
          financial operations.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6"
          asChild
        >
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3" />
            GET IN TOUCH
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
