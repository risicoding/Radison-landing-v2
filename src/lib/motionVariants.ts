import type { Variants } from "motion/react";

export const fadeInUP = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});
