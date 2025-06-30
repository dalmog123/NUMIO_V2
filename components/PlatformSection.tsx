import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, Target } from "lucide-react";
import PentagramLogo from "./PentegramLogo";

const PlatformSection = () =>
  <section id="platform" className="scroll-mt-8 md:scroll-mt-28 pt-32 pb-0 lg:pb-16 bg-black relative">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


      {/* Architecture Visualization */}
      <div className="max-w-6xl mx-auto mb-20">
        {/* Central Hub with Surrounding Components */}
        <div className="relative">
          {/* Background Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Animated connection rings */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-4 border border-blue-500/30 rounded-full animate-pulse"></div>
              <div
                className="absolute inset-8 border border-purple-500/20 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Central NUMIO Core */}
          <div className="flex items-center justify-center mb-2">
            <div className="relative z-20 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 animate-pulse shadow-2xl shadow-cyan-500/50 mx-auto">
                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                  <PentagramLogo size="150" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">NUMIO CORE</h3>
              <p className="text-sm text-cyan-400 font-semibold">FINANCIAL INTELLIGENCE ENGINE</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
              A single, intelligent ecosystem that connects every aspect of your financial operations
            </p>
          </div>
        </div>
      </div>

      {/* Data Flow Visualization */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">DATA INGESTION</h4>
                <p className="text-xs text-cyan-400">Multi-source integration</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-300">ERP Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-sm text-zinc-300">Banking APIs</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <span className="text-sm text-zinc-300">Document Uploads</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-purple-500/50 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">INTELLIGENT PROCESSING</h4>
                <p className="text-xs text-purple-400">AI-powered analysis</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-300">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-sm text-zinc-300">Anomaly Detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <span className="text-sm text-zinc-300">Predictive Analytics</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-green-500/50 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">ACTIONABLE INSIGHTS</h4>
                <p className="text-xs text-green-400">Real-time decisions</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-300">Compliance Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-sm text-zinc-300">Risk Assessments</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <span className="text-sm text-zinc-300">Automated Reports</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

export default PlatformSection;
