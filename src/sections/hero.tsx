"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { heroSection } from "@/content";
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { FadeInUpMotion } from "@/components/fade-in-up-motion";

const Hero = () => {
  return (
    <div>
      <Spotlight />

      <div className="flex min-h-[calc(100vh+90px)] flex-col items-start justify-center gap-6 text-start selection:bg-neutral-200 selection:text-black md:text-center">
        <div className="flex flex-col items-start justify-center gap-6 px-6 md:items-center">
          <FadeInUpMotion>
            <div className="flex items-center border-neutral-700 bg-transparent text-neutral-300">
              {Array.from({ length: 4 }).map((_, idx) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  key={`testimonial-${idx + 1}`}
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/men/4${idx}.jpg`}
                    width={10}
                    height={10}
                    style={{
                      translate: -idx * 6,
                      filter: `brightness(${((idx + 7) / 10) * 90}%)`,
                    }}
                    className="size-6 rounded-full border border-white"
                    alt={`Testimonials-pic-${idx + 1}`}
                  />
                </motion.div>
              ))}
              <span className="mr-1 text-xs font-semibold">40k+</span>
              <span className="text-xs">Happy Users</span>
            </div>
          </FadeInUpMotion>
          <div className="flex flex-col items-start space-y-4 md:items-center">
            <FadeInUpMotion>
              <h1 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-800 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
                {heroSection.title}
              </h1>
            </FadeInUpMotion>

            <FadeInUpMotion>
              <p className="hidden text-sm text-neutral-400 md:flex">
                {heroSection.subtitle}
              </p>
            </FadeInUpMotion>

            <FadeInUpMotion>
              <p className="text-sm text-neutral-400 md:hidden">
                {heroSection.smSubtitle}
              </p>
            </FadeInUpMotion>
          </div>
          <FadeInUpMotion className="flex gap-3">
            <Link href={heroSection.cta[0].link}>
              <Button className="transition duration-300 hover:border hover:border-primary hover:bg-black hover:text-primary">
                {heroSection.cta[0].text}
                <HiChevronRight />
              </Button>
            </Link>
            <Link href={heroSection.cta[1].link}>
              <Button
                variant="outline"
                className="hover:boder transition duration-300 hover:border-primary hover:bg-black hover:text-primary"
              >
                {heroSection.cta[1].text}
              </Button>
            </Link>
          </FadeInUpMotion>
        </div>
        <FadeInUpMotion>
          <Testimonials />
        </FadeInUpMotion>
      </div>
    </div>
  );
};

const logos = [1, 2, 3, 4, 5, 6];

const Testimonials = () => {
  return (
    <Marquee pauseOnHover>
      {logos.map((index) => (
        <div
          key={index}
          className="mx-5 flex h-[150px] items-center justify-center"
        >
          <Image
            src={`/logo/ipsum/${index}.svg`}
            alt={`Logo ${index}`}
            width={100}
            height={50}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default Hero;
