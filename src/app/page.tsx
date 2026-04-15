import React from "react";
import Navbar from "./components/Navbar";
import AsciiBackground from "./components/AsciiBackground";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Icons from "./components/Icons";
import StatsSection from "./components/StatsSection";
import Robot from "./components/Robot";
import IntegrationSection from "./components/IntegrationSection";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
      <AsciiBackground />
      <div className="min-h-screen bg-black relative overflow-hidden">
  
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:44px:54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative max-w-[1440px] mx-auto px-5 z-10">
          <Navbar />
          <Hero />
          <Input />
          <Icons />
          <StatsSection />
          <Robot />
          <IntegrationSection />
        </div>
          <Footer />
      </div>
    </>
  );
};

export default Page;
