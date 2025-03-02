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
    <div className="min-h-[calc(100vh-150px)]">
      <Spotlight />
      <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center gap-6 px-4 text-center">
        <Button
          variant="outline"
          className="rounded-lg border-neutral-700 text-xs text-neutral-100"
          disabled
        >
          {heroSection.banner.icon}
          <span>{heroSection.banner.text}</span>
        </Button>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-800 bg-clip-text text-3xl font-bold text-transparent">
            {heroSection.title}
          </h1>
          <p className="text-sm text-neutral-400">{heroSection.subtitle}</p>
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
            duration: 10,
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex w-40 items-center justify-center">
              <Image
                src={`/logo/ipsum/${index}.svg`}
                width={60}
                height={40}
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
