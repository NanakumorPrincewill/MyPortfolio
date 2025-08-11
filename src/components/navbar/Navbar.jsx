"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [typeEffect] = useTypewriter({
    words: ["<Princewill/>"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 150,
  });

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 bg-white/80 backdrop-blur-md text-text-primary shadow-soft z-[100] ease-in-out duration-500 border-b border-gray-200"
          : "fixed w-full h-20 z-[100] ease-in-out duration-500"
      }
    >
      <div className="container flex items-center justify-between w-full h-full px-6 mx-auto max-w-7xl">
        <Link href="/" className="text-2xl font-bold text-secondary-indigo">
          <h2 className="font-bold font-display">
            <span className="gradient-text">Princewill</span>
          </h2>
        </Link>
        <div>
          <ul className="items-center hidden space-x-8 md:flex">
            <li className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-indigo">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-indigo">
              <Link href="/#about">About</Link>
            </li>
            <li className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-indigo">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-indigo">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-indigo">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="transition-colors duration-300 cursor-pointer md:hidden text-text-primary hover:text-secondary-indigo"
          >
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[200]"
            : ""
        }
        onClick={handleNav}
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white shadow-large z-[300] p-8 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-8 ease-in duration-500"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="text-2xl font-bold text-secondary-indigo"
              >
                <h2 className="font-bold font-display">
                  <span className="gradient-text">Princewill</span>
                </h2>
              </Link>
              <div
                onClick={handleNav}
                className="p-3 transition-colors duration-300 rounded-full cursor-pointer text-text-primary shadow-soft hover:bg-gray-100"
              >
                <AiOutlineClose size={24} />
              </div>
            </div>
            <div className="mt-6 border-b border-gray-200"></div>
          </div>
          <div className="flex flex-col py-6">
            <ul className="space-y-2 text-text-primary">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-secondary-indigo hover:bg-gray-50"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-secondary-indigo hover:bg-gray-50"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-secondary-indigo hover:bg-gray-50"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-secondary-indigo hover:bg-gray-50"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-secondary-indigo hover:bg-gray-50"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-12 mt-8 border-t border-gray-200">
              <p className="mb-6 text-sm font-medium tracking-widest uppercase text-text-secondary">
                Connect with me
              </p>
              <div className="flex items-center justify-between w-full max-w-xs">
                <Link
                  href="https://www.linkedin.com/in/princewill-nanakumor-0a68b824a/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-secondary-indigo rounded-xl shadow-soft hover:shadow-glow hover:scale-110 hover:-translate-y-1">
                    <FaLinkedinIn className="text-lg" />
                  </div>
                </Link>
                <Link
                  href="https://github.com/NanakumorPrincewill"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-primary-slate rounded-xl shadow-soft hover:shadow-medium hover:scale-110 hover:-translate-y-1">
                    <FaGithub className="text-lg" />
                  </div>
                </Link>
                <Link href="#skills" className="group">
                  <div
                    onClick={() => setNav(false)}
                    className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-accent-emerald rounded-xl shadow-soft hover:shadow-glow-emerald hover:scale-110 hover:-translate-y-1"
                  >
                    <BsFillPersonLinesFill className="text-lg" />
                  </div>
                </Link>
                <Link href="/#contact" className="group">
                  <div
                    onClick={() => setNav(false)}
                    className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-gradient-to-r from-secondary-indigo to-accent-emerald rounded-xl shadow-soft hover:shadow-large hover:scale-110 hover:-translate-y-1"
                  >
                    <AiOutlineMail className="text-lg" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
