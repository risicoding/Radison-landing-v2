"use client";

import { SectionHeader } from "@/components/section-header";
import { aboutSection } from "@/content";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
  MotionValue,
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

  // Compute opacity transforms outside the JSX map function

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="relative space-y-8" ref={targetRef}>
        <SectionHeader>{aboutSection.buttonText}</SectionHeader>
        <h2 className="sticky flex flex-wrap items-center justify-center gap-2 text-center text-2xl font-bold">
          {text.map((word, i) => {
            const start = i / text.length - 0.3;
            const end = start + 3 / text.length;
            return (
              <Word key={i} scrollYProgress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </div>
  );
};

const Word = ({
  children,
  scrollYProgress,
  range,
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);

  return (
    <span>
      <span className="absolute opacity-20 blur-[1px]">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default About;
