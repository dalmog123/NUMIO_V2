import { Button } from "@/components/ui/button";
import { Sparkles, Linkedin } from "lucide-react";
import PentagramLogo from "./PentegramLogo";

const TeamSection = () => (
  <section id="team" className="py-32 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 px-6 py-2 rounded-full">
            <span className="text-cyan-400 font-semibold text-sm">OUR TEAM</span>
          </div>
        </div>
        <h2 className="text-5xl font-black mb-6">
          JOIN OUR
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> JOURNEY</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Meet the visionaries behind NUMIO's financial intelligence revolution
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            name: "Aviv Ben Simchon",
            role: "CEO & Financial Visionary",
            bio: "Director at big4 in indirect tax, guiding product strategy & regulatory alignment. Member at the Tax Committee, Institute of CPAs in Israel; Leading national e-Invoicing implementation with ITA. ex-ITA",
            img: "/assets/ABS.jpeg",
            color: "from-cyan-500 to-blue-500",
            borderColor: "border-cyan-500/50",
            hoverColor: "hover:border-cyan-400",
            textColor: "text-cyan-400",
            linkedin: "https://www.linkedin.com/in/aviv-ben-simchon-7685b6179/",
          },
          {
            name: "Almog Dror",
            role: "CPO & Product Architect",
            bio: "Accounting Tools & Automation Developer, Data Analyst and Accountant with expertise in capital markets and programming in various fields.",
            img: "/assets/almog-dror.jpeg",
            color: "from-purple-500 to-pink-500",
            borderColor: "border-purple-500/50",
            hoverColor: "hover:border-purple-400",
            textColor: "text-purple-400",
            linkedin: "https://www.linkedin.com/in/almogdror",
          },
          {
            name: "Yuval Chen",
            role: "CTO & Technology Lead",
            bio: "Full Stack Developer & Automation Developer With Expertise in Financial Markets and AI integration for financial systems.",
            img: "/assets/YuvalChen.jpeg",
            color: "from-green-500 to-emerald-500",
            borderColor: "border-green-500/50",
            hoverColor: "hover:border-green-400",
            textColor: "text-green-400",
            linkedin: "https://www.linkedin.com/in/yuval-chen",
          },
          {
            name: "Join Our Team",
            role: "Open Positions",
            bio: "We're looking for talented individuals passionate about financial technology and innovation to join our growing team.",
            img: "/placeholder.svg?height=200&width=200",
            color: "from-orange-500 to-red-500",
            borderColor: "border-orange-500/50",
            hoverColor: "hover:border-orange-400",
            textColor: "text-orange-400",
            isPlaceholder: true,
            linkedin: null,
          },
        ].map((member, i) => (
          <div
            key={member.name}
            className={`bg-zinc-900 border ${member.borderColor} ${member.hoverColor} rounded-xl overflow-hidden transition-all duration-300 group hover:scale-105`}
          >
            <div className={`h-1 bg-gradient-to-r ${member.color}`}></div>
            <div className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-zinc-800`}
                  >
                    {member.isPlaceholder ? (
                      <Sparkles className="h-8 w-8 text-orange-400" />
                    ) : (
                      <img
                        src={member.img || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {!member.isPlaceholder && (
                    <div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5">
                      <PentagramLogo size="20" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-xl mb-1 flex items-center gap-3">
                    {member.name}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn profile`}
                        className="text-gray-500 hover:text-white"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </h4>
                  <p className={`text-sm font-semibold ${member.textColor}`}>{member.role}</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">{member.bio}</p>
              {member.isPlaceholder && (
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-600 hover:to-red-600 text-black font-bold"
                  asChild
                >
                  <a
                    href="https://mail.google.com/mail/u/0/?to=dalmog123@gmail.com&su=Application+for+Open+Position&fs=1&tf=cm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DISCOVER OPEN POSITIONS
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
