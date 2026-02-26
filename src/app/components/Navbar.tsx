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
          <div className="text-white flex gap-10 items-center">
            <ul className="flex gap-10">
              <li>Products</li>
              <li>Solutions</li>
              <li>Pricing</li>
            </ul>
            <button className="border border-violet-600 px-5 py-1 rounded-sm">
              LOG IN
            </button>
            <button className="px-5 py-1 rounded-sm border bg">APP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;