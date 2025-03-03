import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="z-20 sm:bg-neutral-800/50 bg-black  backdrop-blur-xl fixed w-full">
      <nav className="flex w-full items-center justify-between bg-transparent px-8 py-3 md:px-24">
        <div className="flex gap-2">
          <Image src="/logo.svg" width={20} height={20} alt="radison-logo" />
          <span className="text-md font-semibold">Radison</span>
        </div>
        <ul className="hidden gap-8 text-sm md:flex">
          <li>Product</li>
          <li>Services</li>
          <li>Plans</li>
          <li>Contact</li>
        </ul>
        <Button className="bg-white">Sign in</Button>
      </nav>
    </div>
  );
};

export default Navbar;
