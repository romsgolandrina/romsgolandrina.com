import React from "react";
import {
  LuShoppingBag,
  LuBookOpenText,
  LuBriefcaseBusiness,
  LuCoffee,
  LuAward,
  LuPhone,
} from "react-icons/lu";
import TechBadges from "./TechStack";
import ExperienceTimeline from "./ExperienceTimeline";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Certificates from "./Certificates";
import Contact from "./Contact";

const Bentogrids = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <div className="w-full h-[595px] flex flex-row gap-4">
        <div className="w-[65%] h-full flex flex-col gap-4">
          {/*About*/}
          <div className="w-full h-[68%] bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col gap-3 px-6 py-4">
            <div className="w-full flex flex-row items-center gap-2">
              <LuShoppingBag size={18} />
              <spa className="text-2xl font-semibold">About</spa>
            </div>
            <div className="text-sm leading-[22px]">
              I’m a Front-end Developer, an Information Technology graduate from
              the Technological Institute of the Philippines – Quezon City. My
              focus is on web development, where I’ve worked with technologies
              like React, Next.js, TailwindCSS, Node.js, and MongoDB to build
              applications and improve user interfaces. <br />
              <br /> As a Junior Front-End Developer at Media Meter Inc., I
              worked on production applications—developing new modules,
              integrating REST APIs, and improving features using React, Vite,
              and TypeScript. Before that, I was a Full Stack Developer Intern
              at Creciendo Philippines, where I contributed to a Human Resource
              and Payroll System and rebuilt the company’s official website.{" "}
              <br />
              <br /> I enjoy learning through building. Over time, I’ve
              strengthened my skills with tools such as Git, GitHub, Bitbucket,
              and Postman, while also exploring areas like API design and UI
              development. Looking ahead, I’m interested in expanding my
              knowledge in backend frameworks like Laravel and exploring cloud
              technologies to deploy scalable applications
            </div>
          </div>
          {/*Tech Stack*/}
          <div className="w-full h-[32%] bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col px-6 py-4 gap-3">
            <h1 className="flex flex-row gap-2 items-center">
              <LuBookOpenText size={18} />
              <span className="text-2xl font-semibold">Tech Stack</span>
            </h1>
            <div className="w-full">
              <TechBadges />
            </div>
          </div>
        </div>
        {/*Experience*/}
        <div className="w-[35%] h-full bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col px-6 py-4">
          <div className="w-full flex flex-row gap-2 items-center">
            <LuBriefcaseBusiness size={18} />
            <span className="text-2xl font-semibold">Experience</span>
          </div>
          <ExperienceTimeline />
        </div>
      </div>
      {/* Projects */}
      <div className="w-full h-[500px] bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col px-6 py-4 gap-3">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <LuCoffee size={18} />
            <span className="text-2xl font-semibold">Projects</span>
          </div>
          <Link
            to="projects"
            className="flex flex-row justify-end items-center gap-1 cursor-pointer group"
          >
            <div className="text-xs underline-offset-2 transform transition-transform duration-300 group-hover:translate-x-2">
              View All
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform duration-300 group-hover:translate-x-2"
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
          </Link>
        </div>
        <Projects />
      </div>
      {/* Contacts & Certificates */}
      <div className="w-full h-[400px] flex flex-row gap-3">
        {/* Certificate */}
        <div className="w-[32%] h-full bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col px-6 py-4 gap-3">
          <div className="w-full flex flex-row items-center gap-2">
            <LuAward size={18} />
            <span className="text-2xl font-semibold">Certificates</span>
          </div>
          <Certificates />
        </div>

        {/* Contact */}
        <div className="w-[68%] h-full bg-base-100 border-1 border-base-300 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-base-200 flex flex-col px-6 py-4">
          <div className="w-full flex flex-row items-center gap-2">
            <LuPhone size={18} />
            <span className="text-2xl font-semibold">Connect</span>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bentogrids;
