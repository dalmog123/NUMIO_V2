import { Card } from "@/components/ui/card";
import { FileText, Activity, ScrollText, Database, TrendingUp, Brain, Shield, Users, Target, Lightbulb } from "lucide-react";

const ProblemFocusSection = () => (
  <section className="py-32 bg-zinc-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* 90/10 Problem Focus Visualization */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black mb-6">
            WHILE OTHERS FOCUS ON THE
            <span className="text-green-400"> EASY 90%</span>
          </h2>
          <h2 className="text-5xl font-black mb-6">
            WE TACKLE THE
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> HARDEST 10%</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            The complex, mission-critical financial challenges that others avoid - that's where we excel
          </p>
        </div>

        {/* Redesigned Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - The Easy 90% */}
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                  <div className="text-4xl font-black text-green-400">90%</div>
                  <div className="text-sm font-bold text-green-400">EASY PROBLEMS</div>
                </div>
                <p className="text-zinc-400 text-sm">What everyone else builds</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-zinc-900/50 border-zinc-700/50 p-4 text-center opacity-60">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-zinc-400">Basic Reporting</div>
                </Card>
                <Card className="bg-zinc-900/50 border-zinc-700/50 p-4 text-center opacity-60">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-zinc-400">Simple Calculations</div>
                </Card>
                <Card className="bg-zinc-900/50 border-zinc-700/50 p-4 text-center opacity-60">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <ScrollText className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-zinc-400">Standard Workflows</div>
                </Card>
                <Card className="bg-zinc-900/50 border-zinc-700/50 p-4 text-center opacity-60">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Database className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-zinc-400">Template Solutions</div>
                </Card>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  <span className="text-xs text-zinc-500">Crowded Market</span>
                </div>
              </div>
            </div>

            {/* Right Side - The Hard 10% */}
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10%</div>
                  <div className="text-sm font-bold text-cyan-400">COMPLEX PROBLEMS</div>
                </div>
                <p className="text-cyan-400 text-sm font-semibold">Where NUMIO dominates</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 p-4 text-center hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">Multi-Jurisdiction Tax</div>
                </Card>
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 p-4 text-center hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xs text-purple-400 font-medium">Real-time Fraud Detection</div>
                </Card>
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 p-4 text-center hover:border-green-500/50 transition-all duration-300 group">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xs text-green-400 font-medium">Predictive Audit Analytics</div>
                </Card>
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 p-4 text-center hover:border-orange-500/50 transition-all duration-300 group">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Database className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xs text-orange-400 font-medium">Complex Revenue Recognition</div>
                </Card>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-cyan-400 font-semibold">Blue Ocean Strategy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Divider with Impact Statement */}
          <div className="relative mt-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-zinc-950 px-6 py-3 rounded-full border border-zinc-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    THE 10% THAT CREATES 90% OF THE VALUE
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Positioning Visualization */}
          <div className="mt-12 text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-zinc-500">COMPETITORS</div>
                <div className="text-sm text-zinc-400">Fight over commoditized solutions</div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
                    <Users className="w-8 h-8 text-zinc-600" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  NUMIO
                </div>
                <div className="text-sm text-cyan-400 font-semibold">Owns the complex problem space</div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-cyan-400 flex items-center justify-center animate-pulse">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-2xl font-bold text-zinc-500">MARKET GAP</div>
                <div className="text-sm text-zinc-400">Unaddressed complex needs</div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 border-2 border-zinc-700 border-dashed flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemFocusSection;
