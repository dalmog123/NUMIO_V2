import { Button } from "@/components/ui/button"
import { CheckCircle, Lightbulb } from "lucide-react"
import TaxIntelligenceShowcase from "./ProductsShowcase/Tax-Inteligence-Showcase"
import RevenueRecognitionShowcase from "./ProductsShowcase/Revenue-Recognition-Showcase"
import LeasesManagementShowcase from "./ProductsShowcase/Leases-Managment-Showcase"

const ProductsSection = () => (
  <section id="products" className="scroll-mt-16 pt-14 sm:pt-32 pb-32 bg-zinc-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-black mb-6">
          DISCOVER OUR
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> PRODUCTS</span>
        </h2>
        <p className="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto">
          Comprehensive financial intelligence solutions designed for the modern enterprise
        </p>
      </div>
      <div className="space-y-12 sm:space-y-16">
        {/* Tax Intelligence */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center pb-12 border-b border-zinc-800">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <span className="text-2xl sm:text-[2.5rem] font-black font-mono tracking-tight uppercase text-white">
                  <span className="text-3xl font-black font-mono tracking-tight uppercase text-white">01</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">
                TAX
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  INTELLIGENCE
                </span>
              </h3>
              <p className="text-base sm:text-xl text-zinc-400">Tax Clarity. Business Certainty</p>
              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                Our flagship solution elevates tax compliance from a burden to a competitive edge with real-time
                monitoring, fraud detection, and predictive analytics.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
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
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 border border-zinc-700">
              <TaxIntelligenceShowcase />
            </div>

          </div>
        </div>

        {/* Revenue Recognition */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center pb-12 border-b border-zinc-800">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 border border-zinc-700">
              <RevenueRecognitionShowcase />
            </div>

          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <span className="text-2xl sm:text-[2.5rem] font-black font-mono tracking-tight uppercase text-white">
                  <span className="text-3xl font-black font-mono tracking-tight uppercase text-white">02</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">
                REVENUE
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  RECOGNITION
                </span>
              </h3>
              <p className="text-base sm:text-xl text-zinc-400">Streamline complex revenue recognition workflows</p>
              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                Automate revenue recognition across multiple contract types, performance obligations, and variable
                considerations with precision.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
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
          </div>
        </div>

        {/* Leases Management */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center pb-12 border-zinc-800">
          <div className="space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <span className="text-2xl sm:text-[2.5rem] font-black font-mono tracking-tight uppercase text-white">
                  <span className="text-3xl font-black font-mono tracking-tight uppercase text-white">03</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">
                LEASES
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  MANAGEMENT
                </span>
              </h3>
              <p className="text-base sm:text-xl text-zinc-400">Simplify lease accounting and compliance</p>
              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                Comprehensive lease accounting solution that ensures IFRS 16 & ASC 842 compliance.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
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
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 sm:p-8 border border-zinc-700 max-w-[600px] mx-auto">
              <LeasesManagementShowcase />
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center space-y-8 pt-16">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto">
              <Lightbulb className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black">
              COMING
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> SOON</span>
            </h3>
            <p className="text-base sm:text-xl text-zinc-400">The future of financial intelligence</p>
            <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Our R&D team is developing next-generation solutions to address emerging financial challenges with
              cutting-edge AI and machine learning technologies.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-600 hover:to-red-600 text-black font-bold"
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
)

export default ProductsSection
