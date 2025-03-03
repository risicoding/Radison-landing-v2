import Hero from "@/sections/hero";
import React from "react";
import About from "@/sections/about";
import { Features } from "@/sections/features";
import { Integrations } from "@/sections/integrations";
import { Testimonials } from "@/sections/testimonials";
import { Footer } from "@/sections/footer";

const Page = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-20">
      <Hero />
      <div className="space-y-20 px-6">
        <About />
        <Features />
        <Integrations />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
