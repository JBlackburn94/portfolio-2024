"use client";
import Link from "next/link";
import { navLinks } from "../constants/constants";
import { usePageLoadFadeIn } from "../utils/animationHooks/useAnimations";
import Logo from "./Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  usePageLoadFadeIn();
  return (
    <header className="relative px-3 fade-in opacity-0 z-50 w-full bg-none">
      <nav
        className="flex justify-between items-center"
        role="navigation"
        aria-label="Main navigation"
      >
        <Logo className="w-12" />
        <ul className="hidden lg:flex gap-3 bg-slate-700 py-2 px-3 rounded-full border border-slate-500 bg-opacity-30 border-opacity-20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                aria-label={link.label}
                className="text-slate-300 hover:text-slate-50 font-light text-sm transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3">
          <Link href="#">
            <FaLinkedin
              size={32}
              className="text-slate-300 hover:text-slate-50 transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link href="#">
            <FaGithub
              size={32}
              className="text-slate-300 hover:text-slate-50 transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="block lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Open"}
          </button>
        </div>
        {isOpen && (
          <div className="absolute flex justify-end h-screen w-full top-0 left-0 bg-slate-950 bg-opacity-10 backdrop-blur-sm">
            <ul className="flex border-l-2 border-b-2 border-red-500 p-10 flex-col gap-3 text-xl h-[400px] w-[300px]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} aria-label={link.label}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
