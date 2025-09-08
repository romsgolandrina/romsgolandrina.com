import React from "react";

const ExperienceTimeline = () => {
  const timelineData = [
    {
      title: "Junior Front-end Developer",
      date: "Mar 2025",
      location: "Media Meter Inc.",
      details:
        "Implemented new feature enhancements and UI improvements for existing company web applications.",
    },
    {
      title: "BS in Information Technology",
      date: "Sep 2024",
      location: "T.I.P - QC",
      details: "Graduated w/ Distinction, class 2024",
    },
    {
      title: "Full Stack Web Developer Intern",
      date: "Feb 2024",
      location: "Creciendo Philippines",
      details:
        "Contributed in building HRIS and Payroll System for the company. Led the complete revamp of company's website",
    },
    {
      title: "Hello World 👋",
      date: "Aug 2020",
      location: "",
      details: "Wrote my first line of code",
    },
  ];

  return (
    <div className="md:col-span-2 row-span-2">
      <div className="space-y-4">
        <div>
          <div className="flex flex-row gap-2  justify-between items-center"></div>
          <ul className="relative border-l border-gray-300 pl-6 space-y-8 mt-4">
            {timelineData.map(({ title, date, location, details }) => (
              <li className="relative">
                <span className="relative flex size-3 -left-[30px] top-1">
                  <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-blue-400"></span>
                </span>

                <div className="flex flex-row justify-between items-center -mt-3">
                  <strong className="text-[14px]">{title}</strong>
                  <div className="text-[10px] outline-1 py-1 px-2 text-center rounded-full ">
                    {date}
                  </div>
                </div>
                <h1 className="text-xs mt-1">{location}</h1>
                <p className="mt-2 text-sm leading-[22px]">{details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
