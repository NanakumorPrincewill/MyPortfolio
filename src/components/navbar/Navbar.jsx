"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

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
          ? "fixed w-full h-20 bg-gray-700 text-white shadow-xl z-[100] ease-in-out duration-500"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <div className="container flex items-center justify-between w-full h-full px-2 mx-auto 2xl:px-16">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          <h2>PRINCEWILL</h2>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-orange-500 hover:font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-orange-500 hover:font-medium">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-orange-500 hover:font-medium">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-orange-500 hover:font-medium">
              <Link href="/#projects">Projects</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b hover:text-orange-500 hover:font-medium">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="cursor-pointer md:hidden ">
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <h2>PRINCEWILL</h2>
              </Link>
              <div
                onClick={handleNav}
                className="p-3 text-black rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose size={28} />
              </div>
            </div>
            <div className="mt-4 border-b border-gray-300"></div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="text-black uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-orange-500 hover:font-medium"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-orange-500 hover:font-medium"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-orange-500 hover:font-medium"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-orange-500 hover:font-medium"
                >
                  Projects
                </li>
              </Link>

              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-orange-500 hover:font-medium"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="font-medium tracking-widest text-black uppercase">
                Connect with me
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/princewill-nanakumor-0a68b824a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 text-black duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 hover:text-white">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/NanakumorPrincewill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 text-black duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 hover:text-white">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="#skills">
                  <div
                    onClick={() => setNav(!nav)}
                    className="p-3 text-black duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 hover:text-white"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="p-3 text-black duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 hover:text-white"
                  >
                    <AiOutlineMail />
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
