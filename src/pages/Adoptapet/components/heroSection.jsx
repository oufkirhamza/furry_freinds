import React, { useContext } from "react";
import { MyContext } from "../../../utils/contextProvider";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export const HeroSection = () => {
  const { dataPets } = useContext(MyContext);
  return (
    <div className="flex justify-center p-5">
      <div className="w-[20%] py-4 ">
        <div className="flex justify-between">
          <h1>Filters</h1>
          <h1>Reset Filters</h1>
        </div>
        <div>
            <div className=""></div>
        </div>
      </div>
      <div className="w-[70%]">
        <div className="flex justify-center w-full flex-wrap gap-5 ">
          {dataPets.map((element, index) => (
            <div
              key={index}
              className="w-[30%] flex flex-col justify-between border-2 border-slate-200  pb-5 rounded-lg"
            >
              <div className="flex flex-col gap-2 ">
                <img className=" rounded-t-md" src={element.images[0]} alt="" />
                <div className="flex items-center justify-between px-5">
                  <h1 className="font-bold">{element.name}</h1>
                  {element.isLike ? (
                    <IoMdHeart className="text-lg text-red-500" />
                  ) : (
                    <IoIosHeartEmpty className="text-lg" />
                  )}
                </div>
                <div className="flex items-center gap-2 px-5">
                  <CiLocationOn />
                  <p>{element.city}, USA</p>
                </div>
                <div className="flex flex-col gap-5  px-5">
                  <div className="flex justify-between">
                    <p>
                      {" "}
                      Gender:{" "}
                      <span className="bg-purple-300 text-alpha rounded-full py-1 px-2">
                        {element.gender}
                      </span>
                    </p>
                    <p>
                      Breed:{" "}
                      <span className="bg-purple-300 text-alpha rounded-full py-1 px-2">
                        {element.breed}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      Age:{" "}
                      <span className="bg-purple-300 text-alpha rounded-full py-1 px-2">
                        {element.age} years
                      </span>{" "}
                    </p>
                    <p>
                      Size:{" "}
                      <span className="bg-purple-300 text-alpha rounded-full py-1 px-2">
                        {element.size}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <p className="px-5 text-wrap truncate h-12">{element.story}</p>
              </div>
              <div className="px-5">
                <button className="border-2 border-primary py-3 rounded-lg w-full">
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
