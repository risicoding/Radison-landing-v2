"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ opacity: { duration: 0.8 }, y: { duration: 0.1 } }}
      className="fixed z-20 w-full p-3"
    >
      <nav className="flex w-full items-center justify-between gap-4 rounded-full border border-neutral-800 bg-black bg-opacity-20 px-8 backdrop-blur-md py-4">
        <div className="flex gap-2">
          <Image src="/logo.svg" width={20} height={20} alt="radison-logo" />
          <span className="text-md font-semibold">Radison</span>
        </div>

        <NavItems
          items={[
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
            { name: "About us", href: "/about" },
          ]}
        />

        <Button
          className="hidden rounded-full border-2 border-primary sm:flex"
          variant="outline"
        >
          Sign in
        </Button>

        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex rounded-[8px] font-semibold sm:hidden"
        >
          <HamburgerMenu isOpen={isOpen} />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.3 },
              backdropFilter: { duration: 0.1 },
            }}
            className="mt-4 flex flex-col items-center justify-center gap-6 rounded-[30px] border border-neutral-800 bg-black bg-opacity-20 px-8 py-4 sm:hidden"
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
