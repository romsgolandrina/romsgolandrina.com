import React from "react";
import profile from "../assets/files/roms.jpg";
import verified from "../assets/logo/verified.svg";
import { LuMapPin, LuMail, LuDownload } from "react-icons/lu";
import Bentogrids from "./Bentogrids";
import resumepdf from "../assets/files/Jhon-Rommel-Golandrina_RESUME-2025.pdf";

const MainPage = ({ theme, setTheme }) => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 transition-all duration-500 ease-in-out lg:px-4">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full h-auto flex flex-row gap-4 items-center">
          {/* Profile Picture */}
          <div className="w-[19%]">
            <img
              src={profile}
              alt="my_picture"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          {/*Details*/}
          <div className="flex-1 h-full flex flex-col items-start py-8">
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-2xl font-bold tracking-wide flex flex-row gap-2 items-center">
                Roms Golandrina
                <img src={verified} alt="" className="w-4 h-4" />
              </h1>
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dracula" : "nord")
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
            <div className="flex-1 w-full h-full flex flex-col gap-4">
              <div className="flex flex-row items-center gap-1">
                <LuMapPin size={16} />
                <h1 className="text-sm">Marikina, Philippines</h1>
              </div>
              <h1 className="text-base font-semibold">
                Front-end Developer | BS in Information Technology | Tech
                Enthusiast
              </h1>
              <div className="flex flex-row gap-2">
                <a
                  href="mailto:romsyaintmad@gmail.com"
                  rel="noopener noreferrer"
                  title="Send an email to romsyaintmad@gmail.com"
                  aria-label="Send an email to romsyaintmad@gmail.com"
                  className="btn btn-sm w-36 shadow-sm rounded-md bg-blue-400 flex items-center border-blue-400 dark:text-white transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <LuMail size={18} />
                  <span>Send Mail</span>
                </a>
                <a
                  href={resumepdf}
                  download="Jhon-Rommel-Golandrina_RESUME-2025.pdf"
                  className="btn btn-sm w-36 shadow-sm rounded-md flex items-center bg-transparent border-1 border-neutral-400 transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <LuDownload size={18} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bento Grids */}
        <div>
          <Bentogrids />
        </div>
      </div>
      <div className="mt-50 mb-10">
        <h1 className="border border-gray-400/40"></h1>
        <div className="flex flex-row mt-8">
          <h2 className="text-sm font-medium">
            &#169;2025 Roms Golandrina. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
