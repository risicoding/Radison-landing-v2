"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { heroSection } from "@/content";
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Spotlight />
      <div className="flex min-h-screen flex-col items-start justify-center gap-3 text-start md:text-center">
        <div className="flex flex-col items-start justify-center gap-6 px-6 md:items-center">
          <div className="flex items-center text-neutral-300 border-neutral-700 bg-transparent">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={`testimonial-${idx + 1}`}>

                <img
                  src={`https://randomuser.me/api/portraits/men/4${idx}.jpg`}
                  width={10}
                  height={10}
                  style={{translate:-idx*6}}
                  className='size-6 rounded-full'
                  alt={`Testimonials-pic-${idx + 1}`}
                />

              </div>
            ))}
            <span className="text-xs mr-2 font-semibold">40k+</span>
            <span className="text-xs">Happy Users</span>
          </div>
          <div className="flex flex-col items-start space-y-4 md:items-center">
            <h1 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-800 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              {heroSection.title}
            </h1>

            <p className="hidden text-sm text-neutral-400 md:flex">
              {heroSection.subtitle}
            </p>
            <p className="text-sm text-neutral-400 md:hidden">
              {heroSection.smSubtitle}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href={heroSection.cta[0].link}>
              <Button className="">
                {heroSection.cta[0].text}
                <HiChevronRight />
              </Button>
            </Link>
            <Link href={heroSection.cta[1].link}>
              <Button variant="outline" className="">
                {heroSection.cta[1].text}
              </Button>
            </Link>
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-10">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex min-w-max space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 36,
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex w-40 items-center justify-center">
              <Image
                src={`/logo/ipsum/${index + 1}.svg`}
                width={80}
                height={70}
                alt={`logo-${index}`}
              />
            </div>
          ))}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex w-40 items-center justify-center">
              <Image
                src={`/logo/ipsum/${index + 1}.svg`}
                width={80}
                height={70}
                alt={`logo-${index}`}
              />
            </div>
          ))}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex w-40 items-center justify-center">
              <Image
                src={`/logo/ipsum/${index + 1}.svg`}
                width={80}
                height={70}
                alt={`logo-${index}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
