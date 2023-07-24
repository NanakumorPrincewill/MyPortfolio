"use client";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["<Princewill/>"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 150,
  });

  return (
    <section id="hero" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center  items-center">
        <div className="mt-28">
          <p className="text-sm tracking-widest uppercase">Connect with me</p>
          <h2 className="py-2 text-4xl">
            Hi, I&#39;m {""}
            <span className="text-orange-500">
              {typeEffect}
              <Cursor />
            </span>
          </h2>
          <h1 className="py-1 text-6xl font-bold text-gray-700">
            A Front-End Web Developer
            <hr className="w-10 h-1 mx-auto mt-2 bg-orange-500 border-0"></hr>
          </h1>
          <p className="py-4 text-center text-gray-600 sm:max-w-[70%] m-auto">
            I&#39;m focused on building responsive front-end web applications.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/princewill-nanakumor-0a68b824a/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-4 duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 hover:text-white">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/NanakumorPrincewill"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-4 duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 hover:text-white ">
                <FaGithub />
              </div>
            </Link>

            <Link href="/resume">
              <div className="p-4 duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 hover:text-white ">
                <BsFillPersonLinesFill />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="p-4 duration-300 ease-in bg-orange-500 rounded-lg shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 hover:text-white ">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
          <Link href="/#about">
            <HiArrowDown
              className="container items-center mx-auto mt-32 animate-bounce"
              size={32}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
