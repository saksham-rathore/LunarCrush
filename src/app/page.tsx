import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Input from "./components/Input";
// import Robot from "./components/Robot";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Grid gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:44px_54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Content center*/}
        <div className="relative max-w-[1440px] mx-auto px-5 z-10">
          <Navbar />
          <Hero />
          <Input />
        </div>
      </div>
    </>
  );
};

export default page;
