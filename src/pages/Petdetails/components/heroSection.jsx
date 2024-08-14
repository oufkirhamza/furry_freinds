import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../utils/contextProvider";
import { MdChildCare } from "react-icons/md";
import { MdOutlineVaccines } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { FaNeuter } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { LiaMicrochipSolid } from "react-icons/lia";
import flag from "../../../assets/img/usa_flag.png";
import { CiLocationOn } from "react-icons/ci";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { IoPawOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";
import { CgRuler } from "react-icons/cg";
export const HeroSection = () => {
  const { dataPets } = useContext(MyContext);
  const { id } = useParams();
  const pet = dataPets.filter((pet) => id == pet.id);
  console.log(pet);
  const petDetail = [
    {
      title: "Gender",
      value: pet[0].gender,
      icon: pet.gender == "female" ? <CgGenderFemale /> : <CgGenderMale />,
    },
    {
      title: "Breed",
      value: pet[0].breed,
      icon: <IoPawOutline />,
    },
    {
      title: "Age",
      value: pet[0].age + " month",
      icon: <IoMdTime />,
    },
    {
      title: "Color",
      value: "Red",
      icon: <MdOutlineColorLens />,
    },
    {
      title: "Weight",
      value: "12 Lb",
      icon: <LiaWeightSolid />,
    },
    {
      title: "Height",
      value: "91cm",
      icon: <CgRuler />,
    },
  ];
  return (
    <div className="py-8 px-16 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Hi Human !</h1>
      <div className="flex items-center gap-3">
        <div className="rounded-full p-1 border-2 border-slate-400 border-dashed">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src={pet[0].images[0]}
            alt=""
          />
        </div>
        <div className="text-xl">
          <h1>{pet[0].name}</h1>
          <p>pet ID: 25054165</p>
        </div>
      </div>
      <div className="flex gap-2">
        <img width={70} src={flag} alt="usa flag" />
        <div className="flex flex-col">
          <h1>United States Of America</h1>
          <div className="flex items-center gap-1">
            <CiLocationOn /> <h1>{pet[0].city}</h1>{" "}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[65%] flex flex-col gap-3 ">
          {/* big image */}
          <img
            className="w-full object-cover rounded-lg"
            src={pet[0].images[0]}
            alt=""
          />
          {/* small images */}
          <div className="flex gap-1 w-full">
            {pet[0].images.map((element, index) => (
              <img
                className="w-[25%] rounded-lg"
                key={index}
                src={element}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-4">
          <div className="bg-green-50 rounded-lg flex flex-col gap-4 p-4">
            <h1 className="text-xl font-medium text-green-800">
              {pet[0].name} Story
            </h1>
            <p>{pet[0].story}</p>
          </div>
          <div className="text-lg flex flex-col gap-4">
            <div className="flex items-center gap-4 ">
              <MdChildCare className="text-green-800" />
              <p>Can live with other children of any age</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineVaccines className="text-green-800" />
              <p>Vaccinated</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineWarehouse className="text-green-800" />{" "}
              <p>House-Trained</p>
            </div>
            <div className="flex items-center gap-2">
              <FaNeuter className="text-green-800" /> <p>Neutrated</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCameraOutline className="text-green-800" />{" "}
              <p>Shots up to date</p>
            </div>
            <div className="flex items-center gap-2">
              <LiaMicrochipSolid className="text-green-800" />
              <p>Microchipped</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-5 py-10">
          {petDetail.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-slate-50 rounded-md w-[8%] pt-9 relative"
            >
              <div className="absolute -top-5 border-b-4 text-3xl text-alpha rounded-full border-alpha flex justify-center items-center w-12 h-12 bg-white">
                {element.icon}
              </div>
              <h1>{element.title}</h1>
              <h1 className="text-alpha font-medium">{element.value}</h1>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex w-[70%] rounded-lg">
            <div className="bg-slate-50 border-2 border--0 border-slate-300 rounded-l-lg ">
              <div className="flex justify-center items-center text-alpha px-7 py-3 bg-slate-50 border-b-2 border-slate-300 rounded-tl-lg">
                <h1>Age</h1>
              </div>
              <div className="flex justify-center items-end text-alpha px-7 py-3 bg-slate-50 ">
                <h1>Vaccinated</h1>
              </div>
            </div>
            <div className="border-2 border-x-0 border-slate-300 w-1/4">
              <div className="flex justify-center items-center text-alpha px-7 py-3 bg-slate-50 border-b-2 border-r-2 border-slate-300 ">
                <h1>8th Week</h1>
              </div>
              <div className="flex flex-col items-center bg-white p-4 ">
                <p>Bordetella</p>
                <p>Match</p>
                <p>Leptospirosis</p>
              </div>
            </div>
            <div className="border-2 border-x-0 border-slate-300 w-1/4">
              <div className="flex justify-center items-center text-alpha px-7 py-3 bg-slate-50 border-b-2 border-r-2 border-slate-300 ">
                <h1>14th Week</h1>
              </div>
              <div className="flex flex-col items-center bg-white p-4 ">
                <p>Bordetella, Canine Anfulanza</p>
                <p>Match</p>
                <p>Leptospirosis</p>
              </div>
            </div>
            <div className="border-2 border-l-0 border-slate-300 w-1/4 rounded-r-lg">
              <div className="flex justify-center items-center text-alpha px-7 py-3 bg-slate-50 border-b-2 rounded-tr-lg border-slate-300 ">
                <h1>22th Week</h1>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-br-lg">
                <p>Bordetella, Canine Anfulanza</p>
                <p>Match</p>
                <p>Leptospirosis</p>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-300 rounded-lg flex flex-col px-8 justify-center items-center gap-3 h-fit py-5">
            <h1>If you are interested to adopt</h1>
            <button className="bg-alpha px-3 py-2 rounded-lg text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
