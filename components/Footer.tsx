import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="py-12 bg-black border-t border-zinc-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <Image
              src="/assets/NumioLogo.png"
              alt="Numio Logo"
              width={150}
              height={150}
              priority
            />
          </div>
          <div>
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NUMIO
            </span>
            <p className="text-xs text-zinc-400">FINANCIAL INTELLIGENCE</p>
          </div>
        </div>

        {/* Legal Text */}
        <div className="text-left md:text-right">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} NUMIO SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            AUTOMATING COMPLIANCE • EMPOWERING PROFESSIONALS
          </p>
        </div>

        {/* LinkedIn Button */}
        <div>
          <a
            href="https://www.linkedin.com/company/numiosolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>Follow us on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
