import { Card, CardContent } from "@/components/ui/card";
import { Activity, Brain, Lock, Plug, ScrollText, TrendingUp } from "lucide-react";

const PlatformSection = () => (
  <section id="platform" className="py-32 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-6">
          UNIFIED PLATFORM
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> ARCHITECTURE</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
          As your business grows, so does your data. Our platform is designed to scale with you, automating your
          financial processes to let you focus on what matters most.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-cyan-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AUTOMATED WORKFLOWS</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tax and accounting processes that run themselves, reducing manual effort
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-purple-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI-POWERED ANALYTICS</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Advanced machine learning algorithms that continuously improve with your data
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-green-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">ENTERPRISE SECURITY</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Bank-grade encryption, role-based access control, and comprehensive audit trails
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-orange-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plug className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">SEAMLESS INTEGRATION</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Connect with your existing ERP, CRM, and financial systems through robust APIs
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-yellow-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ScrollText className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">REGULATORY COMPLIANCE</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Built-in compliance with IFRS, GAAP, and local regulatory requirements
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-700 text-center hover:border-blue-500/50 transition-all duration-300 group">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">SCALABLE ARCHITECTURE</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Handles enterprise-scale data volumes with consistent performance
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default PlatformSection;
