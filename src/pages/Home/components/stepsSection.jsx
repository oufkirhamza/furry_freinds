import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";

const StepsSection = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      description: "Set up your profile (including photos) in minutes",
    },
    {
      icon: <MdOutlineHomeWork />,
      description:
        "Describe your home and routine so rehomers can see if it’s right for their pet",
    },
    {
      icon: <MdContentPasteSearch />,
      description: "Start your search!",
    },
  ];
  const line = (
    <svg
      width="212"
      height="104"
      viewBox="0 0 212 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02832 2.06604C76.3448 -5.06727 64.2133 95.8158 211.308 102.185"
        stroke="#675BC8"
        stroke-width="2"
        stroke-dasharray="10 5"
      />
    </svg>
  );
  return (
    <div className=" flex flex-col gap-3 items-center py-7">
      <h1 className="text-4xl font-medium">Adopt or Rehome a pet in just </h1>
      <h4 className="text-2xl">3 Easy Steps</h4>
      <div className="flex justify-between gap-4 pt-5">
        {steps.map((element, index) => (
          <div
            className={`relative border-2 bg-white border-slate-200 w-[25%] flex flex-col  items-center gap-5 rounded-lg p-4 text-center ${
              index === 1 ? `before:content-leftline before:absolute before:-left-40 before:-z-40 after:content-rightline after:absolute after:-right-40 after:-z-40` : ""
            }`}
          >
            <div className="absolute -top-[10%] w-10 h-10 rounded-full flex justify-center items-center bg-purple-300">
              {index + 1}
            </div>
            <h1 className="text-8xl text-alpha">{element.icon}</h1>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
