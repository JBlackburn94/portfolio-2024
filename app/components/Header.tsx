"use client";
import { useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../constants/constants";
import Logo from "./Logo";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  headerAnimaton,
  navCloseAnimation,
  navOpenAnimation,
} from "../utils/animations";

const Header = () => {
  useEffect(() => {
    headerAnimaton();
  }, []);

  const handleOpen = () => {
    navOpenAnimation();
  };

  const handleClose = () => {
    navCloseAnimation();
  };

  return (
    <header className="fixed p-4 md:p-6 lg:p-8 w-full header overflow-hidden">
      <nav className="flex justify-between items-center">
        <Logo className="w-12 backdrop-blur-sm bg-transparent z-50" />

        {/* Desktop menu */}
        <div className="md:flex gap-[10px] hidden text-slate-400 bg-slate-400 border border-slate-400 border-opacity-20 px-4 py-2 rounded-full bg-opacity-10 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm hover:text-slate-50 active:text-slate-50 transition-all duration-500 ease-in-out"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex flex-col md:hidden text-slate-50 backdrop-blur-sm bg-transparent h-[30px] w-[30px] overflow-hidden z-50">
          <FaBars
            onClick={handleOpen}
            className="hamburger cursor-pointer min-h-[28px] min-w-[28px]"
          />
          <FaTimes
            onClick={handleClose}
            className="close cursor-pointer min-h-[28px] min-w-[28px]"
          />
        </div>

        {/* Mobile links */}
        <div className="flex flex-col justify-center items-center gap-10 mobile-menu absolute bottom-0 left-0 h-0 w-full bg-gradient-to-tl from-slate-900 to-slate-800">
          {navLinks.map((link) => (
            <span key={link.id} className="overflow-hidden h-auto w-full">
              <Link
                href={link.url}
                className="text-white text-center py-4 block nav-link text-xl"
                onClick={handleClose}
              >
                {link.title}
              </Link>
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex gap-[10px] backdrop-blur-sm bg-transparent">
          <FaLinkedin
            size={35}
            className="hover:rotate-[10deg] hover:scale-125 transition-all duration-300 ease-in-out "
          />
          <FaGithub
            size={35}
            className="hover:rotate-[10deg] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
