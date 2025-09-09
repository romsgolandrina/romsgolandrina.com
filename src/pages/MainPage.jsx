import React from "react";
import profile from "../assets/files/roms.jpg";
import verified from "../assets/logo/verified.svg";
import { LuMapPin, LuMail, LuDownload } from "react-icons/lu";
import Bentogrids from "./Bentogrids";
import resumepdf from "../assets/files/Jhon-Rommel-Golandrina_RESUME-2025.pdf";

const MainPage = ({ theme, setTheme }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 transition-all duration-500 ease-in-out">
      <div className="flex flex-row xl:gap-3 gap-4 items-center">
        <div className="md:w-1/5 w-1/3">
          <img
            src={profile}
            alt="Profile"
            className=" h-auto object-contain rounded-[10px]"
          />
        </div>
        <div className="flex-1 flex-row justify-between items-start ">
          <div className="flex flex-col justify-center xl:space-y-3 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <h1 className="md:text-2xl text-[18px] font-bold tracking-wide flex gap-2 items-center">
                Roms Golandrina{" "}
                <img src={verified} alt="check" className="w-5 h-5" />
              </h1>
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dracula" : "pastel")
                  }
                  checked={theme === "dracula"}
                />
                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>

            <div className="flex items-center gap-1 -mt-2">
              <LuMapPin size={16} />
              <h2 className="xl:text-sm text-[10px] ">
                Marikina City, Philippines
              </h2>
            </div>

            <h3 className="xl:text-base text-[14px] font-semibold">
              Front-end Developer | BS in Information Technology | Tech
              Enthusiast
            </h3>

            <div className="grid grid-cols-2 grid-rows-1 gap-2 md:w-2/5 mt-2 ">
              <a
                href="mailto:romsyaintmad@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send an email to romsyaintmad@gmail.com"
                aria-label="Send an email to romsyaintmad@gmail.com"
                className="btn btn-sm shadow-sm rounded-md bg-blue-400 flex items-center border-blue-400 dark:text-white transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="xl:text-sm text-[10px] xl:font-medium flex flex-row gap-2 items-center">
                  <LuMail size={18} />
                  <span>Send Email</span>
                </div>
              </a>
              <a
                href={resumepdf}
                download="Jhon-Rommel-Golandrina_RESUME-2025.pdf"
                className="btn btn-sm shadow-sm rounded-md flex items-center bg-transparent border-1 border-neutral-400 transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="xl:text-sm text-[10px] xl:font-medium flex flex-row gap-2 items-center">
                  <LuDownload size={18} />
                  <span>Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Bentogrids />

      <div className="mt-50 mb-10">
        <div className="border border-gray-400/40"></div>
        <div className="flex flex-row mt-8">
          <h2 className="text-sm font-medium">
            &#169; 2025 Roms Golandrina. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
