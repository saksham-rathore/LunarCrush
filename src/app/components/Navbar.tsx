import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between text-center items-center ">
        <div className="flex text-center items-center size-20 gap-2">
          <Image src="/LOGO.png" alt="logo" width={60} height={60} />
          <div className="text-white">
            <h2 className="text-2xl">LunarCrush</h2>
          </div>
        </div>

        <div>
          <div className="text-white flex gap-10 items-center font-medium">
            <ul className="flex gap-10">
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Products</li>
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Solutions</li>
              <li className="hover:text-violet-400 cursor-pointer transition-colors">Pricing</li>
            </ul>
            <button className="border border-violet-600/50 px-5 py-1.5 rounded-full hover:border-violet-400 hover:bg-violet-600/10 transition-all duration-300">
              LOG IN
            </button>
            <button className="px-6 py-1.5 rounded-full bg-violet-600 border border-violet-600 hover:bg-transparent hover:text-violet-400 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              APP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;