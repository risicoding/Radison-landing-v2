import Hero from "@/sections/hero";
import React from "react";
import About from "@/sections/about";
import { Features } from "@/sections/features";
import { Testimonials } from "@/sections/testimonials";
import { Footer } from "@/sections/footer";

import { Integrations } from "@/sections/integrations";
import Pricing from "@/sections/pricing";
import { Faq } from "@/sections/faq";
import { Contact } from "@/sections/contact";

const Page = () => {
  return (
    <div className="space-y- mx-auto max-w-4xl">
      <Hero />
      <div className="flex flex-col gap-24 px-6">
        <About />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
