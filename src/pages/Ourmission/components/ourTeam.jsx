import React from "react";
import img1 from "../../../assets/img/team/Team_pic1.png";
import img2 from "../../../assets/img/team/Team_pic2.png";
import img3 from "../../../assets/img/team/Team_pic3.png";
import img4 from "../../../assets/img/team/Team_pic4.png";
import img5 from "../../../assets/img/team/Team_pic5.png";
import img6 from "../../../assets/img/team/Team_pic6.png";
import img7 from "../../../assets/img/team/Team_pic7.png";
import img8 from "../../../assets/img/team/Team_pic8.png";

export const OurTeam = () => {
  const team = [
    {
      img: img1,
      name: "Anika Septimus",
      position: "CEO",
    },
    {
      img: img2,
      name: "Alfonso Curtis",
      position: "Veterinarian",
    },
    {
      img: img3,
      name: "Carter Baptista",
      position: "Senior Data Scientist",
    },
    {
      img: img4,
      name: "Leo Saris",
      position: "Director of Engineering",
    },
    {
      img: img5,
      name: "Alfredo Dokidis",
      position: "Front-End Developer",
    },
    {
      img: img6,
      name: "Tatiana Carder",
      position: "Product Associate",
    },
    {
      img: img7,
      name: "Madelyn Calzoni",
      position: "Back-End Developer",
    },
    {
      img: img8,
      name: "Ann Westervelt",
      position: "Senior Data Scientist",
    },
  ];
  return (
    <div className="flex flex-col gap-10 items-center">
      <h1 className="text-2xl font-medium py-7 text-green-800">Our Team</h1>
      <div className="flex justify-center flex-wrap gap-7 py-4">
        {
            team.map((e,i)=>
            <div className="relative  flex w-[20%] pb-6 pt-20 mt-12 border-2 border-slate-200 rounded-lg flex-col justify-center items-center gap-3">
                <img className="w-[45%] absolute -top-12" src={e.img} alt="" />
                <h1 className="text-alpha text-lg">{e.name}</h1>
                <h1>{e.position}</h1>
            </div>
            )
        }
      </div>
    </div>
  );
};
