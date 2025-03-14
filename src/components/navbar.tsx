"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";
import { IoMdArrowRoundUp } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<"full" | "md" | "sm">("full");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const diff = scrollYProgress.getPrevious()! - current;
    console.log(current, diff);
    if (diff > 0) return setWidth("md");
    setWidth(current === 0 ? "full" : current > 0.1 ? "sm" : "md");
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      whileInView={{
        y: 0,
        opacity: 1,

        paddingTop: width === "md" || width == "sm" ? "0.75rem" : "0rem",
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: { duration: 0.1 },
      }}
      className="fixed z-20 w-full"
    >
      <motion.nav
        initial={{
          borderRadius: 0,
          width: width === "full" ? "100%" : width === "md" ? "96%" : "60%",
        }}
        animate={{
          width: width === "full" ? "100%" : width === "md" ? "96%" : "60%",
          borderRadius: width === "sm" || width === "md" ? "999px" : "0px",
        }}
        transition={{
          duration: 2,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
        className="mx-auto flex w-full items-center justify-between gap-4 border border-neutral-800 bg-black bg-opacity-20 px-8 py-4 backdrop-blur-md"
      >
        <div className="flex gap-2">
          <Image src="/logo.svg" width={20} height={20} alt="radison-logo" />
          <span
            className={cn(
              "text-md font-semibold",
              width === "sm" ? "hidden" : "flex",
            )}
          >
            Radison
          </span>
        </div>

        <NavItems
          items={[
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
            { name: "About us", href: "/about" },
          ]}
        />

        <Button
          className="hidden rounded-full border-2 border-primary bg-transparent sm:flex"
          variant="outline"
        >
          {width == "sm" ? (
            <IoMdArrowRoundUp className="rotate-[45deg] text-primary" />
          ) : (
            "Sign In"
          )}
        </Button>

        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex rounded-[8px] font-semibold sm:hidden"
        >
          <HamburgerMenu isOpen={isOpen} />
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              backdropFilter: "blur(0px)",
              width: "96%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              backdropFilter: "blur(10px)",

              width: width === "full" ? "96%" : width === "md" ? "96%" : "60%",
            }}
            exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.3 },
              backdropFilter: { duration: 0.1 },
              duration: 1,
            }}
            className="mx-auto mt-4 flex flex-col items-center justify-center gap-6 rounded-[30px] border border-neutral-800 bg-black bg-opacity-20 px-8 py-4 sm:hidden"
          >
            <NavItems
              className=""
              variant="sm"
              items={[
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
                { name: "About us", href: "/about" },
              ]}
            />
            <div className="flex gap-3">
              <Button className="flex rounded-full border-2 border-primary">
                Sign in
              </Button>
              <Button
                variant="outline"
                className="flex rounded-full border-2 border-primary bg-transparent"
              >
                Sign up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type NavItemsProps = {
  items: { name: string; href: string }[];
  className?: string;
  variant?: "full" | "sm";
};

const NavItems = ({ items, className, variant = "full" }: NavItemsProps) => {
  return (
    <ul
      className={cn(
        "flex flex-row items-center justify-center gap-4 font-normal text-neutral-300",
        variant === "full" ? "hidden sm:flex" : "flex-col sm:hidden",
        className,
      )}
    >
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
