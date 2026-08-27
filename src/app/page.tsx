"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";

const page = () => {
  return (
    <>
      <div className="pb-10">
        <HeroSection />
        <div className="px-10">
          <WhatWeDo />
        </div>
      </div>
    </>
  );
};

export default page;
