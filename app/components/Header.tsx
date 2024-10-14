"use client";
import { useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../constants/constants";
import Logo from "./Logo";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { headerAnimaton } from "../utils/animations";

export default function Header() {
  useEffect(() => {
    headerAnimaton();
  }, []);

  return (
    <header className="p-4 md:p-6 lg:p-8 header">
      <nav className="flex justify-between items-center">
        <Logo className="w-12" />

        {/* Desktop menu */}
        <div className="md:flex gap-[10px] hidden text-gray-400 bg-gray-50 px-4 py-2 rounded-full bg-opacity-20 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm hover:text-white active:text-white transition-all duration-500 ease-in-out"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden text-white">
          <FaBars size={28} />
        </div>

        {/* Social icons */}
        <div className="hidden md:flex gap-[10px]">
          <FaLinkedin
            size={35}
            className="hover:rotate-[360deg] hover:scale-125 transition-all duration-300 ease-in-out"
          />
          <FaGithub
            size={35}
            className="hover:rotate-[360deg] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </div>
      </nav>
    </header>
  );
}
