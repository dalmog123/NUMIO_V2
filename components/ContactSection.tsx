import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-6">
          EXPERIENCE THE FUTURE OF
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> FINANCIAL INTELLIGENCE</span>
        </h2>
        <p className="text-xl text-zinc-300 mb-16 leading-relaxed">
          Schedule a personalized walkthrough and discover how Numio's suite of solutions can transform your
          financial operations.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <Card className="bg-zinc-900/50 border-zinc-700 text-center backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">BOOK YOUR DEMO</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Get a personalized demonstration of our platform
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold"
                asChild
              >
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCHEDULE NOW
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/50 border-zinc-700 text-center backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">CONTACT US</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">Reach out for partnerships and inquiries</p>
              <Button variant="outline" size="lg" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                GET IN TOUCH
              </Button>
            </CardContent>
          </Card>
        </div>
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold text-lg px-12 py-4"
          asChild
        >
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-6 h-6 mr-3" />
            BOOK YOUR DEMO
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
