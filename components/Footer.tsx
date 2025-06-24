import Image from "next/image";

const Footer = () => (
  <footer className="py-12 bg-black border-t border-zinc-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold text-sm">
            <Image
              src="/assets/NumioLogo.png"
              alt="Pentagram Logo"
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
        <div className="text-center md:text-right">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} NUMIO SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-zinc-600 mt-1">AUTOMATING COMPLIANCE • EMPOWERING PROFESSIONALS</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
