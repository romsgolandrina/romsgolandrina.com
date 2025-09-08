import React from "react";
import { Link } from "react-router-dom";

const Certificates = () => {
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

  return (
    <div className="w-full flex flex-col gap-4">
      {certificate.map(({ title, link }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-30 p-4 border-1 border-base-300 shadow-xs rounded-lg hover:shadow-md transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-base-300 flex flex-col gap-2"
        >
          <h1 className="text-sm font-semibold">{title}</h1>
          <p className="text-sm">Completion Certificate</p>
          <Link className="flex flex-row justify-end items-center gap-1 cursor-pointer group">
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
          </Link>
        </a>
      ))}
    </div>
  );
};

export default Certificates;
