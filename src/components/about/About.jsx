import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full h-screen px-2 py-10 scroll-mt-14">
      <div>
        <h1
          data-aos="zoom-in-up"
          className="mb-10 text-4xl font-bold tracking-widest text-center text-gray-700 md:text-5xl lg:text-6xl"
        >
          About
          <hr className="w-10 h-1 mx-auto mt-2 bg-orange-500 border-0"></hr>
        </h1>
      </div>
      <div className="container px-2 mx-auto">
        <div className="flex flex-col md:items-center md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h2 className="py-1 font-bold text-orange-500">Who I Am?</h2>
            <p className="py-2 text-gray-600">
              I specialize in building dynamic, user-friendly, mobile responsive
              front-end UI web applications. I&#39;m passionate about learning
              new technologies and I understand there is more than one way to
              accomplish a task. Though I am most proficient in building
              front-end applications using HTML, CSS, Tailwind CSS, Javascript
              React and Nextjs. I am a quick learner and can pick up new tech
              stacks as needed. I believe that being a great developer is not
              using one specific language, but choosing the best tool for the
              job.
            </p>
          </div>
          <div className="mt-8 ml-10 md:w-1/2 md:ml-10 md:mt-0 lg:ml-20">
            <Image
              width={550}
              height={200}
              class="object-cover object-center ease-in duration-200 "
              alt="hero"
              src="/aboutme.gif"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
