import React, { useContext } from "react";
import { MyContext } from "../../../utils/contextProvider";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import cat from "../../../assets/img/cat_icon.svg";
import dog from "../../../assets/img/dog.svg";
import { CiLocationArrow1 } from "react-icons/ci";
import { PawSize } from "../../../components/pawSize";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const { dataPets } = useContext(MyContext);
  const inputFilter = [
    {
      title: "Breed",
      properties: [
        "German Shepherd",
        "Bulldog",
        "Labrador Retriever",
        "Golden Retriever",
        "Pit Bull",
        "Shiba Ino",
        "Rottweiler",
        "Dobermann",
        "Chow Chow",
        "Siberian Husky",
      ],
    },
    {
      title: "Color",
      properties: [
        "Golden",
        "Brown",
        "Gray",
        "Black",
        "Red",
        "Bicolor",
        "Brindle",
      ],
    },
    {
      title: "Gender",
      properties: ["Any", "Female", "Male"],
    },
    {
      title: "Age",
      properties: [
        "Puppy/Kitten : 0-9 mounths",
        "Junior/Adolescent : 9 mounths to 2 years",
        "Sunior: More than 9 years",
      ],
    },
  ];
  console.log(Array.from({ length: "3" }));
  return (
    <div className="flex justify-center p-5">
      <div className="w-[20%] py-4 flex flex-col items-center gap-3 ">
        <div className="flex justify-between py-2">
          <h1>Filters</h1>
          <h1>Reset Filters</h1>
        </div>
        <div className="py-4 border-t-2 border-slate-200 flex gap-2 justify-between">
          <div className="w-28 h-28 flex flex-col text-alpha text-xl justify-center items-center  border-2 rounded-full border-alpha">
            <img src={cat} alt="" />
            <h1>Cat</h1>
          </div>
          <div className="w-28 h-28 flex flex-col text-alpha text-xl justify-center items-center  border-2 rounded-full border-alpha">
            <img src={dog} alt="" />
            <h1>Dog</h1>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold">Location</h1>
          <div className="border-2 flex flex-col gap-2 border-slate-100 p-2 rounded-lg">
            <h1 className="text-slate-600 ">City or Zip</h1>
            <h1 className="font-semibold ">Ave 11th FI, New York</h1>
          </div>
          <div className="text-green-900 flex gap-3 items-center p-3">
            <CiLocationArrow1 className="text-lg font-bold" />
            <h1 className="underline">Use current location</h1>
          </div>
        </div>
        <div>
          <input type="range" />
          <div className="flex justify-between items-end py-3">
            {Array.from({ length: "3" }).map((_, index) => (
              <div className="flex flex-col items-center">
                <div
                  className={`flex cursor-pointer items-center justify-center relative before:absolute before:righ-[50%] before:text-[#2e266a] before:font-bold before:top-[50%] ${
                    index === 0
                      ? 'mb-2 before:content-["S"] '
                      : index === 1
                      ? 'before:content-["M"]'
                      : 'before:content-["L"]'
                  }`}
                >
                  <PawSize
                    key={index}
                    width={
                      index == "0"
                        ? 60
                        : index == "1"
                        ? 80
                        : index == "2"
                        ? 100
                        : ""
                    }
                    height={
                      index == "0"
                        ? 60
                        : index == "1"
                        ? 90
                        : index == "2"
                        ? 110
                        : ""
                    }
                  />
                </div>
                <h1>
                  {index === 0 ? "Small" : index === 1 ? "Medium" : "Large"}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {inputFilter.map((element, index) => (
            <select className="border-2 border-slate-200 py-2 rounded-lg px-1" name="" id="">
              <option selected disabled key={index} value={element.title}>{element.title}</option>
              {
                element.properties.map((e,i)=>
                <option key={index} value={e}>{e}</option>
                )
              }
            </select>
          ))}
        </div>
        <button className="border-2 border-alpha px-3 py-2 rounded-lg text-alpha">Apply your filter</button>
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
                <Link to={`/adopt_a_pet/${element.id}`}>
                <button className="border-2 border-primary py-3 rounded-lg w-full">
                  More info
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
