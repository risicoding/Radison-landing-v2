import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-center pt-2 sm:pt-9">
      <div className="fixed z-20 w-full border border-neutral-800 bg-black bg-opacity-20 backdrop-blur-md md:w-[800px] sm:w-[600px] sm:rounded-full">
        <nav className="flex w-full items-center justify-between gap-4 bg-transparent px-8 py-3">
          <div className="flex gap-2">
            <Image src="/logo.svg" width={20} height={20} alt="radison-logo" />
            <span className="text-md font-semibold">Radison</span>
          </div>
          <ul className="hidden gap-8 text-sm sm:flex">
            <li>Product</li>
            <li>Services</li>
            <li>Plans</li>
            <li>Contact</li>
          </ul>
          <Button
            className="rounded-full border-2 border-primary"
            variant="outline"
          >
            Sign in
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
