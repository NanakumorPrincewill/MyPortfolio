import Image from "next/image";

const skills = [
  {
    image: "/html.png",
    description: "HTML",
  },
  {
    image: "/css.png",
    description: "CSS",
  },
  {
    image: "/bootstrap.png",
    description: "Bootstrap",
  },
  {
    image: "/tailwind.png",
    description: "Tailwind",
  },
  {
    image: "/javascript.png",
    description: "JavaScript",
  },
  {
    image: "/react.png",
    description: "React",
  },
  {
    image: "/nextjs.png",
    description: "NextJS",
  },
  {
    image: "/mongo.png",
    description: "MongoDB",
  },
  {
    image: "/github1.png",
    description: "Github",
  },
  {
    image: "/git.png",
    description: "Git",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-2 py-10 mt-24 md:mt-0 scroll-mt-24">
      <h1 className="mb-4 text-4xl font-bold tracking-widest text-center text-gray-700 md:text-5xl lg:text-6xl">
        Skills
        <hr className="w-10 h-1 mx-auto mt-2 bg-orange-500 border-0"></hr>
      </h1>
      <div className="container flex flex-col items-center justify-center w-full mx-auto ">
        <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="p-6 duration-300 ease-in border border-black hover:shadow-black hover:shadow-lg rounded-xl hover:scale-105"
              >
                <div className="grid items-center justify-center grid-cols-2 gap-4">
                  <div className="m-auto">
                    <Image src={skill.image} width={64} height={64} alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.description}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
