import React from "react";

const Footer = () => {
  return (
    <div className="text-white h-150 w-full">
      <div>
        <div className="text-8xl text-center pt-50">
        <h1>Start gaining an edge now.</h1>
      </div>
      <div className="flex justify-center items-center pr-80">
        <div className="flex text-center items-center size-40 gap-2">
          <img src="/LOGO.png" alt="logo"/>
          <div className="text-white">
            <h2 className="text-5xl">LunarCrush</h2>
          </div>
        </div>
      </div>
      <div className="text-white flex gap-10 items-center pl-200">
            <ul className="flex gap-10">
              <li className="hover:text-violet-600">Pricing</li>
              <li className="hover:text-violet-600">Support</li>
              <li className="hover:text-violet-600">Affiliate</li>
              <li className="hover:text-violet-600">Shop</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
