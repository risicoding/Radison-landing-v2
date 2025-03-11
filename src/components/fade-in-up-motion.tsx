"use client";

import { MotionProps, motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

export type FadeInUpMotionProps = MotionProps &
  React.HTMLAttributes<HTMLDivElement> & { delay?: number };

export const FadeInUpMotion = React.forwardRef<
  HTMLDivElement,
  FadeInUpMotionProps
>(({ className, delay, ...props }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      ref={ref}
      className={cn("", className)}
      {...props}
    />
  );
});
