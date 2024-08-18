import React from "react";
import dogNose from "../../../assets/img/Nose_towards_dog.png";

const SecondSection = () => {
  return (
    <div className="p-4 flex flex-col justify-center gap-16 ">
      <img src={dogNose} alt="" />
      <div className="border-2 border-black/10 rounded-lg flex flex-col justify-center items-center gap-3 py-4 text-xl">
        <h1 className="text-green-800">
          Creating loving families through pet adoption
        </h1>
        <p className="text-center w-[85%]">
          When a family adopts a pet, everything changes for the better. There’s
          a connection that builds. Love fills the home. And every day after is
          brighter.
        </p>
        <p className="text-center w-[85%]">
          Petco Love Adopt's purpose is to help pets in need find their forever
          families and spread that special breed of love to as many homes as
          possible.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
