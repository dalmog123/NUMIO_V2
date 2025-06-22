import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Target } from "lucide-react";

const MissionSection = () => (
  <section className="py-32 bg-zinc-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-6">
          WE HAVE A
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> STRONG FOUNDATION</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl font-black">
              OUR
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> MISSION</span>
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Founded by top‑tier tax strategists, visionaries and accountants, Numio is on a mission to automate
              tax and accounting compliance so accounting professionals can focus on what matters most.
            </p>
          </div>
        </div>
        <div className="grid gap-8">
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white">INNOVATION</h4>
              </div>
              <p className="text-zinc-400">Pioneering financial intelligence solutions</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white">COMPLIANCE</h4>
              </div>
              <p className="text-zinc-400">Ensuring regulatory compliance across global jurisdictions</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 hover:border-green-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white">EFFICIENCY</h4>
              </div>
              <p className="text-zinc-400">Automate complex financial processes for maximum productivity</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default MissionSection;
