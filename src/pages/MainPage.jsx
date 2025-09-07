import React from "react";
import profile from "../assets/files/roms.jpg";

const MainPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 transition-all duration-500 ease-in-out">
      <div className="w-full h-56 flex flex-row gap-4 items-center">
        <div className="w-[21%]">
          <img
            src={profile}
            alt="my_picture"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="flex-1 h-full flex flex-col items-start py-8">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">
              Roms Golandrina
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
