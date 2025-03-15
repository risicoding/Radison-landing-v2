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

const navItems = [
  {name:'Home',href:'/'},
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "About us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<"full" | "md" | "sm">("full");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setWidth(current === 0 ? "full" : current > 0.1 ? "sm" : "md");
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        y: 0,
        opacity: 1,
        paddingTop: width === "md" || width == "sm" ? "0.75rem" : "0rem",
      }}
      transition={{ opacity: { duration: 0.8 }, y: { duration: 0.1 } }}
      className="fixed z-20 w-full"
    >
      <motion.nav
        initial={{
          borderRadius: 0,
          width: width === "full" ? "100%" : width === "md" ? "96%" : "60%",
        }}
        animate={{
          width: width === "full" ? "100%" : width === "md" ? "96%" : "60%",
          borderRadius: width !== "full" ? "999px" : "0px",
        }}
        transition={{
          duration: 2,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
        className="mx-auto flex w-full items-center justify-between gap-4 border border-neutral-800 bg-black bg-opacity-20 px-8 py-4 backdrop-blur-md"
      >
        <Logo width={width} />
        <NavItems items={navItems} />
        <AuthButton width={width} />
        <div onClick={() => setIsOpen((prev) => !prev)} className="sm:hidden">
          <HamburgerMenu isOpen={isOpen} />
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu width={width} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = ({ width }: { width: "full" | "md" | "sm" }) => (
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
);

const NavItems = ({ items, className, variant = "full" }: NavItemsProps) => (
  <ul
    className={cn(
      "flex items-center gap-4 text-neutral-300",
      variant === "full" ? "hidden sm:flex" : "flex-col sm:hidden",
      className,
    )}
  >
    {items.map(({ name, href }, index) => (
      <Link href={href} key={index}>
        <li>{name}</li>
      </Link>
    ))}
  </ul>
);

const AuthButton = ({ width }: { width: "full" | "md" | "sm" }) => (
  <Button
    className="hidden rounded-full border-2 border-primary bg-transparent sm:flex"
    variant="outline"
  >
    {width === "sm" ? (
      <IoMdArrowRoundUp className="rotate-[45deg] text-primary" />
    ) : (
      "Sign In"
    )}
  </Button>
);

const MobileMenu = ({
  width,
  onClose,
}: {
  width: "full" | "md" | "sm";
  onClose: () => void;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: -20,
      width: "96%",
      backdropFilter: "blur(0px)",
    }}
    animate={{
      opacity: 1,
      y: 0,
      width: width === "full" ? "96%" : width === "md" ? "96%" : "60%",
      backdropFilter: "blur(10px)",
    }}
    exit={{
      opacity: 0,
      y: -20,
      width: "96%",
      backdropFilter: "blur(0px)",
    }}
    transition={{
      duration: 0.5,
    }}
    className="mx-auto mt-4 flex flex-col items-center gap-6 rounded-[30px] border border-neutral-800 bg-black bg-opacity-20 px-8 py-4 sm:hidden"
  >
    <NavItems variant="sm" items={navItems} />
    <div className="flex gap-3">
      <Button className="rounded-full border-2 border-primary">Sign in</Button>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary bg-transparent"
      >
        Sign up
      </Button>
    </div>
  </motion.div>
);

type NavItemsProps = {
  items: { name: string; href: string }[];
  className?: string;
  variant?: "full" | "sm";
};

export default Navbar;
