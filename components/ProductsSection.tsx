import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  CheckCircle,
  BarChart3,
  FileText,
  Database,
  Lightbulb,
} from "lucide-react";

const ProductsSection = () => (
  <section id="products" className="pt-14 sm:pt-32 pb-32 bg-zinc-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-6">
          DISCOVER OUR
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> PRODUCTS</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Comprehensive financial intelligence solutions designed for the modern enterprise
        </p>
      </div>
      <div className="space-y-16">
        {/* Tax Intelligence */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-4xl font-black">
                TAX
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> INTELLIGENCE</span>
              </h3>
              <p className="text-xl text-zinc-400">Tax Clarity. Business Certainty</p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Our flagship solution elevates tax compliance from a burden to a competitive edge with real-time
                monitoring, fraud detection, and predictive analytics.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-zinc-300">Real-time VAT risks heatmap</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-zinc-300">Invoice integrity for fraud & error detection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="text-zinc-300">Predictive audit radar for regulatory compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-zinc-300">Automated schema validation</span>
              </div>
            </div>
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
                SCHEDULE A DEMO
              </a>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 border border-zinc-700">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Revenue Recognition */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 border border-zinc-700">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <FileText className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-4xl font-black">
                REVENUE
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> RECOGNITION</span>
              </h3>
              <p className="text-xl text-zinc-400">Streamline complex revenue recognition workflows</p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Automate revenue recognition across multiple contract types, performance obligations, and variable
                considerations with precision.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="text-zinc-300">ASC 606 & IFRS 15 compliant recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-pink-400" />
                <span className="text-zinc-300">Standalone selling price analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span className="text-zinc-300">Contract modification tracking & versioning</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black font-bold"
              asChild
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE A DEMO
              </a>
            </Button>
          </div>
        </div>
        {/* Leases Management */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Database className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-4xl font-black">
                LEASES
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> MANAGEMENT</span>
              </h3>
              <p className="text-xl text-zinc-400">Simplify lease accounting and compliance</p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Comprehensive lease accounting solution that ensures IFRS 16 & ASC 842 compliance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-zinc-300">Automated lease classification & measurement</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-zinc-300">Dynamic lease modification handling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-zinc-300">Integrated impairment testing</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold"
              asChild
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE A DEMO
              </a>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 border border-zinc-700">
              <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <Database className="w-32 h-32 text-green-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Coming Soon */}
        <div className="text-center space-y-8 py-16">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto">
              <Lightbulb className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-4xl font-black">
              COMING
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> SOON</span>
            </h3>
            <p className="text-xl text-zinc-400">The future of financial intelligence</p>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Our R&D team is developing next-generation solutions to address emerging financial challenges with
              cutting-edge AI and machine learning technologies.
            </p>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 text-white bg-transparent hover:bg-zinc-900"
            asChild
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-UydaYC9OosZwLXotWsj2zwRyzzsN1oQH6HHXV8W74UDK7qc-cUUr9Be1x59QKphr8_7xtX2Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE A DEMO
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
