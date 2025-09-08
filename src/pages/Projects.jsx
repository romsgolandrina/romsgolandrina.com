import React from "react";
import Creciendo from "../assets/projectImages/creciendo.png";
import Roms from "../assets/projectImages/roms-v1.png";
import Trckr from "../assets/projectImages/trckr.png";

const Projects = () => {
  const projectCards = [
    {
      thumbnail: Trckr,
      title: "Trckr",
      details:
        "My own personal project to help fresh graduates on their job hunting journey!",
      stack: ["React+Vite", "TailwindCSS", "ReactContextAPI", "DaisyUI"],
      linkvercel: "https://trckr-roms-dev.vercel.app/",
      progress: "In progress",
    },
    {
      thumbnail: Roms,
      title: "Roms Golandrina v1",
      details: "This is my first ever portfolio",
      stack: ["Nextjs", "TailwindCSS", "DaisyUI"],
      linkvercel: "https://romsgolandrina.vercel.app/",
      progress: "Finished",
    },
    {
      thumbnail: Creciendo,
      title: "Creciendo Philippines",
      details: "Led the revamp of company's official website",
      stack: ["Nextjs", "TailwindCSS", "Animate.css", "AOS", "DaisyUI"],
      linkvercel: "https://www.creciendo.com.ph/home",
      progress: "Finished",
    },
  ];

  const badgeColors = {
    HTML5: "bg-[#E34F26] text-white",
    CSS3: "bg-[#1572B6] text-white",
    JavaScript: "bg-[#F7DF1E] text-black",
    React: "bg-[#61DAFB] text-black",
    "React+Vite": "bg-[#646CFF] text-white",
    TypeScript: "bg-[#3178C6] text-white",
    GitHub: "bg-black text-white",
    TailwindCSS: "bg-[#06B6D4] text-white",
    Figma: "bg-[#F24E1E] text-white",
    MongoDB: "bg-[#47A248] text-white",
    Vercel: "bg-black text-white",
    VSCode: "bg-[#007ACC] text-white",
    Bitbucket: "bg-[#0052CC] text-white",
    Git: "bg-[#F05032] text-white",
    "Node.js": "bg-[#339933] text-white",
    Postman: "bg-[#FF6C37] text-white",
    Nextjs: "bg-black text-white",
    Vite: "bg-[#646CFF] text-white",
    DaisyUI: "bg-[#5A0EF0] text-white",
    ReactContextAPI: "bg-[#0FAF72] text-white",
    "Animate.css": "bg-[#DD2476] text-white",
    AOS: "bg-[#FF7F50] text-white",
    default: "bg-gray-300 text-black",
  };

  return (
    <div className="w-full h-full flex flex-row gap-4 items-center justify-center">
      {projectCards.map(
        ({ thumbnail, title, details, stack, linkvercel, progress }) => (
          <a
            href={linkvercel}
            target="_blank"
            rel="noopener noreferrer"
            key={title}
            className="w-[320px] h-[410px] border border-base-300 shadow-sm rounded-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md hover:bg-base-300 cursor-pointer"
          >
            <div className="w-full h-full flex flex-col gap-3 p-6">
              <div className="w-full h-[200px] relative">
                <img
                  src={thumbnail}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain rounded-md"
                />
                <h1
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-md text-xs font-semibold ${
                    progress === "Finished"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {progress}
                </h1>
              </div>
              <h1 className="font-semibold">{title}</h1>
              <p className="text-sm text-neutral-500 dark:text-gray-500 h-10">
                {details}
              </p>
              <div className="w-full flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <div
                    key={tech}
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      badgeColors[tech] || badgeColors.default
                    }`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </a>
        )
      )}
    </div>
  );
};

export default Projects;
