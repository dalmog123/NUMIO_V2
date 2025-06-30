"use client";

import { useInView } from "react-intersection-observer";
import { SplineScene } from "./ui/splite";

const MissionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="pt-12 lg:pt-32 pb-0 bg-zinc-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 px-2">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-balance max-w-xl mx-auto leading-tight">
            WE HAVE A
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}STRONG FOUNDATION
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 px-2">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-black text-balance">
                OUR
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}MISSION
                </span>
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Founded by top‑tier tax strategists, visionaries and accountants, Numio puts your compliance on autopilot - automating the toughest 10% of tax and accounting challenges.
              </p>
            </div>
          </div>

          {/* Robot scene - lazy load when in view */}
          <div
            ref={ref}
            className="w-full h-[500px] lg:h-[600px] max-w-full overflow-hidden"
          >
            {inView ? (
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="loader"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
