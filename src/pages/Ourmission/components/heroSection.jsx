import React from "react";
import cat from "../../../assets/img/Kissing_cat.png";

export const HeroSection = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-4">
      <img className="" src={cat} alt="" />
      <div className="border-2 border-black/10 rounded-lg flex flex-col justify-center items-center gap-3 py-4 text-xl">
        <h1 className="text-green-800">Our Mission</h1>
        <p className="text-center w-[65%]">
          Furry-Friends is a lifesaving nonprofit bringing pets and people
          together. We are here to create loving families.
        </p>
      </div>
      <div className="flex justify-between items-center py-7">
        <div className="flex flex-col gap-4 w-[50%]">
          <h1 className="text-xl font-medium text-green-700">What We Do</h1>
          <p>
            We're a safer, more professional and ethical alternative to sites
            like Facebook, Preloved, Pets4Homes and Gumtree.
          </p>
          <p>
            Our platform connects potential adopters with people who need to
            rehome their pets, dogs and cats. This makes it easier for good
            people to adopt the right pet whilst maximizing the chance of pets
            finding their forever home.
          </p>
          <p>
            We offer a non-judgmental service to rehomers and give them full
            control of the process. We're also helping to reduce the number of
            animals going into shelters. This frees up space and resources for
            the pets who have been abandoned, need immediate help or specialist
            care.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center border-2 border-slate-200 rounded-lg h-fit px-6 py-7">
          <div className="flex gap-4 items-center">
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.36 23.38L16 19.86L20.62 23.38L18.86 17.68L23.5 14H17.82L16 8.38L14.18 14H8.5L13.12 17.68L11.36 23.38ZM32 16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16C0 20.06 1.52 23.74 4 26.56V42L16 38L28 42V26.56C30.48 23.74 32 20.06 32 16ZM16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16C4 9.38 9.38 4 16 4ZM16 34L8 36.04V29.84C10.36 31.2 13.08 32 16 32C18.92 32 21.64 31.2 24 29.84V36.04L16 34Z"
                fill="#675BC8"
              />
            </svg>
            <p className="text-xl">
              4.2 million<span className="text-slate-300"> pets Rehomed</span>
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.36 23.38L16 19.86L20.62 23.38L18.86 17.68L23.5 14H17.82L16 8.38L14.18 14H8.5L13.12 17.68L11.36 23.38ZM32 16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16C0 20.06 1.52 23.74 4 26.56V42L16 38L28 42V26.56C30.48 23.74 32 20.06 32 16ZM16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16C4 9.38 9.38 4 16 4ZM16 34L8 36.04V29.84C10.36 31.2 13.08 32 16 32C18.92 32 21.64 31.2 24 29.84V36.04L16 34Z"
                fill="#675BC8"
              />
            </svg>
            <p className="text-xl">
              4.2 million<span className="text-slate-300"> pets Rehomed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
