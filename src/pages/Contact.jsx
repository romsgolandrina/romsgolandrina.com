import React from "react";
import LinkedIn from "../assets/logo/linkedin.png";
import Github from "../assets/logo/github.png";
import Instagram from "../assets/logo/instagram.png";

const Contact = () => {
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
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-sm font-semibold">
        I'm currently looking for job opportunities. If you have any suggestions
        or feedback, I’d be happy to hear from you!
      </h1>
      <div className="flex flex-col gap-1">
        <span className="text-sm">Email</span>
        <label className="input validator w-full rounded-md border-1">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="e.g, johndoe@mail.com" />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm">Feedback</span>
        <label className="input w-full rounded-md border-1">
          <input type="text" placeholder="Enter your feedback here..." />
        </label>
      </div>
      <button className="btn btn-md w-full shadow-sm rounded-md bg-blue-400 flex items-center border-blue-400 dark:text-white transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md">
        <span>Send Message</span>
      </button>
      <div className="w-full flex flex-col gap-1">
        <span className="text-sm font-semibold">Social Link</span>
        <div className="w-full flex flex-row items-center justify-between">
          {socialLinks.map(({ logo, link }) => (
            <div className="w-[195px] h-12 px-6 py-4 border-1 border-base-300 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-base-300 cursor-pointer">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="" className="w-8 h-8 object-contain" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
