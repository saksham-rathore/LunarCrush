import React from "react";

const Footer = () => {
  return (
    <footer className="text-white pt-32 pb-20 border-t border-white/10 mt-20">
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">
            Start gaining <br /> an edge now.
          </h1>
          <button className="px-8 py-4 rounded-full bg-violet-600 text-xl font-medium hover:bg-violet-500 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]">
            Get Started for Free
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <img src="/LOGO.png" alt="logo" className="w-12 h-12" />
            <h2 className="text-3xl font-bold tracking-tight">LunarCrush</h2>
          </div>

          <div className="flex gap-12 text-gray-400">
            <ul className="flex flex-wrap justify-center gap-8 md:gap-12 text-lg">
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Support</li>
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Affiliate</li>
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Shop</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 LunarCrush, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
