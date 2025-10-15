import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  LuShoppingBag,
  LuBriefcaseBusiness,
  LuCoffee,
  LuAward,
  LuPhone,
} from "react-icons/lu";
import TechBadges from "./TechStack";
import Creciendo from "../assets/projectImages/creciendo.png";
import Roms from "../assets/projectImages/roms-v1.png";
import Trckr from "../assets/projectImages/trckr.png";
import LinkedIn from "../assets/logo/linkedin.png";
import Github from "../assets/logo/github.png";
import Instagram from "../assets/logo/instagram.png";

const Bentogrids = () => {
  const projects = [
    {
      image: Trckr,
      title: "Trckr.",
      description:
        "My own personal project to help fresh graduates on their job hunting journey!",
      stack: ["React+Vite", "TailwindCSS", "ReactContextAPI", "DaisyUI"],
      linkvercel: "https://trckr-roms-dev.vercel.app/",
      progress: "In progress",
    },
    {
      image: Roms,
      title: "Roms Golandrina - v1",
      description:
        "This is my first ever portfolio when I started job hunting!",
      stack: ["Nextjs", "TailwindCSS", "DaisyUI", "AOS", "Animate.css"],
      linkvercel: "https://romsgolandrina.vercel.app/",
      progress: "Completed",
    },

    {
      image: Creciendo,
      title: "Creciendo Philippines",
      description: "Led the revamp of company's official website",
      stack: ["Nextjs", "TailwindCSS", "Animate.css", "AOS", "DaisyUI"],
      linkvercel: "https://www.creciendo.com.ph/home",
      progress: "Completed",
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

  const certificate = [
    {
      title: "IBM - Getting Started with Front-End and Web Development",
      link: "https://www.coursera.org/account/accomplishments/verify/GXOHA6RFXC58",
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      link: "https://www.coursera.org/account/accomplishments/verify/KDCKQAE77CTV",
    },
  ];

  const socialLinks = [
    {
      logo: LinkedIn,
      link: "https://www.linkedin.com/in/jhon-rommel-golandrina/",
    },
    {
      logo: Github,
      link: "https://github.com/romsgolandrina",
    },
    {
      logo: Instagram,
      link: "https://www.instagram.com/itzzyr.roms/",
    },
  ];

  return (
    <div className="container h-full grid grid-cols-1 md:grid-cols-6 grid-rows-1 gap-4 mt-6 mb-20">
      {/* About */}
      <Card className="md:col-span-4 row-span-1 flex flex-col justify-between border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <CardContent className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-2 items-center"
          >
            {/* Icon placeholder */}
            <LuShoppingBag size={18} />
            <span className="text-2xl font-semibold">About</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm leading-6"
          >
            I’m a Front-end Developer, an Information Technology graduate from
            the Technological Institute of the Philippines – Quezon City. My
            focus is on web development, where I’ve worked with technologies
            like React, Next.js, TailwindCSS, Node.js, and MongoDB to build
            applications and improve user interfaces.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm leading-6"
          >
            As a Junior Front-End Developer at Media Meter Inc., I worked on
            production applications—developing new modules, integrating REST
            APIs, and improving features using React, Vite, and TypeScript.
            Before that, I was a Full Stack Developer Intern at Creciendo
            Philippines, where I contributed to a Human Resource and Payroll
            System and rebuilt the company’s official website.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm leading-6"
          >
            I enjoy learning through building. Over time, I’ve strengthened my
            skills with tools such as Git, GitHub, Bitbucket, and Postman, while
            also exploring areas like API design and UI development. Looking
            ahead, I’m interested in expanding my knowledge in backend
            frameworks like Laravel and exploring cloud technologies to deploy
            scalable applications
          </motion.div>
        </CardContent>
      </Card>

      {/* Tech Stack Card */}
      <Card className="row-start-2 md:col-span-4 border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <CardContent className="">
            <TechBadges />
          </CardContent>
        </motion.div>
      </Card>

      {/* Experience Card */}
      <Card className="md:col-span-2 row-span-2 border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <CardContent className="space-y-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row gap-2 justify-between items-center"
            >
              <div className="flex flex-row gap-2 justify-between items-center">
                <LuBriefcaseBusiness size={18} />
                <span className="text-2xl font-semibold">Experience</span>
              </div>
            </motion.div>

            <ul className="relative border-l border-gray-300 pl-6 space-y-8 mt-4">
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[14px]">
                    Front-end Developer
                  </strong>
                  <div className="text-[10px] outline-1  py-1 px-2 text-center rounded-sm">
                    Present
                  </div>
                </div>
                <h1 className="text-xs mt-1">Pacific Data Resources (Asia) Inc.</h1>
                <p className="mt-4 text-sm leading-5">
                  Developed front-end components for their new projects and maintain existing projects.
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[14px]">
                    Junior Front-end Developer
                  </strong>
                  <div className="text-[10px] outline-1  py-1 px-2 text-center rounded-sm">
                    Mar 2025
                  </div>
                </div>
                <h1 className="text-xs mt-1">Media Meter Inc</h1>
                <p className="mt-4 text-sm leading-5">
                  Implemented new feature enhancements and UI improvements for
                  existing company web applications.
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[13px]">
                    BS in Information Technology
                  </strong>
                  <div className="text-[10px] outline-1 py-1 px-2 text-center rounded-sm">
                    Sep 2024
                  </div>
                </div>
                <h1 className="text-xs mt-1">T.I.P - Q.C</h1>
                <p className="mt-4 text-sm leading-5">
                  Graduated w/ Distinction, class 2024
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[12px]">
                    Full Stack Web Developer Intern
                  </strong>
                  <div className="text-[10px] outline-1 py-1 px-2 text-center rounded-sm">
                    Jul 2024
                  </div>
                </div>
                <p className="mt-4 text-sm leading-5">
                  Contributed in building HRIS and Payroll System for the
                  company. Led the complete revamp of company's website
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[14px]">Hello World 👋</strong>
                  <div className="text-[10px] outline-1 py-1 px-2 text-center rounded-sm">
                    Aug 2020
                  </div>
                </div>
                <p className="mt-4 text-sm leading-5">
                  Wrote my first line of code
                </p>
              </motion.li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Project Card */}
      <Card className="md:col-span-6 border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <CardContent className="space-y-4 cursor-none">
          <div className="flex flex-row justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-2 items-center"
            >
              <LuCoffee size={18} />
              <span className="text-2xl font-semibold">Projects</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.linkvercel}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="block"
              >
                <Card className="transform transition-transform duration-300 ease-in-out hover:-translate-y-2 border-base-300 shadow-sm hover:shadow-md hover:bg-base-300 cursor-none">
                  <CardContent className="flex flex-col space-y-2">
                    <img
                      src={project.image}
                      alt="Project Thumbnail"
                      className="rounded mb-2"
                    />
                    <h3 className="font-semibold flex gap-2 items-center">
                      {project.title}
                      <span
                        className={`text-xs px-2 py-1 rounded-sm outline-1 bg-base-200 ${
                          project.progress === "Completed"
                            ? "outline-green-500 bg-green-300 text-green-800"
                            : "outline-red-500 bg-red-300 text-red-800"
                        }`}
                      >
                        {project.progress}
                      </span>
                    </h3>
                    <p className="text-sm ">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
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
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications Card */}
      <Card className="md:col-span-2 border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <CardContent className="space-y-2">
          <div className="flex flex-row justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-2 items-center"
            >
              <LuAward size={18} />
              <span className="text-2xl font-semibold">Certificates</span>
            </motion.div>
          </div>

          <div className="space-y-4 mt-4">
            {/* Certification items placeholder */}
            {certificate.map((certificate, index) => (
              <motion.a
                key={index}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col justify-between min-h-26 border-1 border-base-300 shadow-sm p-4 rounded-[10px] transform transition-transform duration-300 ease-in-out hover:shadow-md hover:bg-base-300 hover:-translate-y-1.5 cursor-none"
              >
                <div>
                  <h1 className="font-bold tracking-wide leading-5 mb-2">
                    {certificate.title}
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-center gap-1 cursor-none">
                  <div className="text-xs">View</div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M4.66663 11.3334L11.3333 4.66669"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.66663 4.66669H11.3333V11.3334"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Card */}
      <Card className="md:col-span-4 border-base-300 shadow-sm hover:shadow-md transition-shadow dark:bg-base-200">
        <CardContent className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-2 mb-4 items-center"
          >
            <LuPhone size={18} />
            <h2 className="text-2xl font-bold">Connect</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm leading-6 mb-4"
          >
            Open to new opportunities in front-end development. Always eager to
            learn, collaborate, and take on new challenges—let’s connect!
          </motion.p>

          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Label htmlFor="email" variant="muted">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                aria-required="true"
                className="bg-base-300 border-0 mt-1 text-black cursor-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Label htmlFor="feedback" variant="muted">
                Feedback
              </Label>
              <Input
                id="feedback"
                type="text"
                name="feedback"
                required
                aria-required="true"
                className="bg-base-300 border-0 mt-1 text-black cursor-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Button
                type="submit"
                variant="submit"
                size="w"
                className="w-full"
              ></Button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Label htmlFor="text" variant="muted" className="mt-2">
              Social Links
            </Label>
            <div className="flex flex-row justify-between space-x-6 mt-1 ">
              {socialLinks.map((socialLinks, index) => (
                <a
                  href={socialLinks.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 border-1 border-base-300 rounded-lg w-1/3 shadow-sm transform transition-transform duration-300 ease-in-out hover:shadow-md hover:bg-base-300 hover:-translate-y-0.5 cursor-none"
                >
                  <img src={socialLinks.logo} alt="LinkedIn" className="h-8" />
                </a>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bentogrids;
