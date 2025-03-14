import Hero from "@/sections/hero";
import React from "react";
import About from "@/sections/about";
import { Features } from "@/sections/features";
import { Testimonials } from "@/sections/testimonials";
import { Footer } from "@/sections/footer";

const Page = () => {
  return (
    <div className="space-y- mx-auto max-w-4xl">
      <Hero />
      <div className="flex flex-col gap-6 px-6">
        <About />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
