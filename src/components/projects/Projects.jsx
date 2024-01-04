import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    image: "/crudapp.png",
    name: "Crud Application",
    description:
      "This is a React full stack CRUD web application built for  users to create , delete, and update their profile details. It is also connected to a functioning database and hosted on netlify. With this program, I was able to understand how Nextjs app router and page routin works ",
    tectnology: "Technologies:",
    tectnologyDescription: "Tailwind css, Nextjs and MongoDB",
    github: "https://github.com/NanakumorPrincewill/Nextjs_Crud_Application",
    link: "https://nexjs-crud-app.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-2 py-10 scroll-mt-20">
      <div>
        <h1
          data-aos="zoom-in-up"
          className="mb-10 text-4xl font-bold tracking-widest text-center text-gray-700 md:text-5xl lg:text-6xl"
        >
          Projects
          <hr className="w-10 h-1 mx-auto mt-2 bg-orange-500 border-0"></hr>
        </h1>
      </div>
      <div className="container flex flex-col px-2 mx-auto mb-6 ">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <div className="flex flex-col md:flex-row md:space-x-12 ">
                <div className="mt-6 border-t-4 border-orange-500 rounded-xl md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="image"
                      width={600}
                      height={400}
                      className="duration-500 ease-in shadow-xl rounded-xl hover:opacity-80"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h2 className="mb-1 text-2xl font-bold">{project.name}</h2>
                  <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <h2 className="mb-0 text-2xl font-meduim">
                    {project.tectnology}
                  </h2>
                  <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                    {project.tectnologyDescription}
                  </p>
                  <div className="flex flex-row space-x-4 align-bottom">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center px-8 py-2 text-lg text-black transition duration-200 ease-in bg-orange-500 border-0 rounded focus:outline-none hover:bg-orange-600 hover:text-white"
                    >
                      <BsGithub className="mx-1" /> Github
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center px-8 py-2 text-lg text-black transition duration-200 ease-in bg-orange-500 border-0 rounded lex focus:outline-none hover:bg-orange-600 hover:text-white"
                    >
                      <BsArrowUpRightSquare className="mx-1 " /> Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
