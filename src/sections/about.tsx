"use client";

import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { aboutSection } from "@/content";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useRef } from "react";

const text = aboutSection.text.split(" ");
const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (current) =>
    console.log(current),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="relative space-y-8" ref={targetRef}>
        <SectionHeader>{aboutSection.buttonText}</SectionHeader>
        <h2 className="sticky flex flex-wrap items-center justify-center gap-2 text-center text-2xl font-bold">
          {text.map((word, i) => {
            const start = i / text.length - 0.3;
            const end = start + 3 / text.length;
            return (
              <span key={i}>
                <span className="absolute opacity-20 blur-[1px]">{word}</span>
                <motion.span
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [start, end],
                      [0, 1],
                    ),
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>
      </div>
    </div>
  );
};

export default About;
