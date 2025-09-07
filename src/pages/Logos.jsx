import React from "react";
import Marquee from "react-fast-marquee";
import bitbucket from "../assets/logo/bitbucket.svg";
import css from "../assets/logo/css.svg";
import figma from "../assets/logo/figma.svg";
import git from "../assets/logo/git.svg";
import github from "../assets/logo/github.svg";
import html from "../assets/logo/html5.svg";
import javascript from "../assets/logo/javascript.svg";
import mongodb from "../assets/logo/mongodb.svg";
import nextjs from "../assets/logo/nextjs.svg";
import nodejs from "../assets/logo/nodejs.svg";
import postman from "../assets/logo/postman.svg";
import react from "../assets/logo/react.svg";
import tailwindcss from "../assets/logo/tailwindcss.svg";
import typescript from "../assets/logo/typescript.svg";
import vercel from "../assets/logo/vercel.svg";
import vscode from "../assets/logo/vscode.svg";
import vite from "../assets/logo/vite.svg";

const Logos = () => {
  const logo = [
    html,
    css,
    javascript,
    react,
    typescript,
    github,
    tailwindcss,
    figma,
    mongodb,
    vercel,
    vscode,
    bitbucket,
    git,
    nodejs,
    postman,
    nextjs,
    vite,
  ];

  return (
    <div className="relative mt-8">
      <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-base-100 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-base-100 to-transparent pointer-events-none" />

      <div className="overflow-x-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {logo.map((techStack, index) => (
            <div className="mx-2" key={index}>
              <img src={techStack} alt={`tech-${index}`} className="w-12" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Logos;
