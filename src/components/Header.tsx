import React from "react";
import DarkLogo from "@/assests/dark_logo.png";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconPhone } from "@tabler/icons-react";

function Header() {
  return (
    <>
      <header className="absolute left-0 right-0 top-0 bg-black/10 backdrop-blur-md px-5 py-3 flex justify-between items-center">
        <section className="flex justify-start gap-3 items-center">
          <section className="w-10 h-10 rounded-md">
            <Image
              src={DarkLogo}
              alt="Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </section>
          <p className="text-xl tracking-wide font-bold">DuooTech</p>
        </section>
        <section>
          <HoverBorderGradient className="bg-sky-600 tracking-wide flex items-center gap-1 text-sm">
            {/* <IconPhone size={20} /> */}
            Contact Us
          </HoverBorderGradient>
        </section>
      </header>
    </>
  );
}

export default Header;
