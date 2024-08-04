import React, { useContext } from "react";
import humandpets from "../../../assets/img/pet_adoption_illustration.png";
import paw from "../../../assets/img/paw.png";
import walkingCat from "../../../assets/img/walking_cat.png";
import walkingDog from "../../../assets/img/walking_dog.png";
import standingDog from "../../../assets/img/standing_dog.png";
import sittingCat from "../../../assets/img/sitting_catn.png";
export const CoexestingSection = () => {
    
  return (
    <div className="py-7 flex">
      <div className="w-[50%] text-3xl font-medium flex flex-col gap-3 items-center">
        <h1>Peaceful Coexistence</h1>
        <h1 className="text-green-900">Human & Animals</h1>
        <img className="w-[70%]" src={humandpets} alt="" />
      </div>
      <div className="w-[50%] flex gap-5">
        <div className="w-[40%] flex flex-col justify-between ">
          <div className=" p-4 flex flex-col gap-4 border-2 border-slate-200 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={paw} alt="" />
              <h1 className="text-green-900 font-medium">Emotional relationship</h1>
            </div>
            <p>
              The emotional bond between cats and humans is deeply rooted in
              felines' unconditional love and companionship.
            </p>
            <img className="w-[15%]" src={walkingCat} alt="" />
          </div>
          <div className="p-4 flex flex-col gap-4 border-2 border-slate-200 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={paw} alt="" />
              <h1 className="text-green-900 font-medium">Children and pets</h1>
            </div>
            <p>
              Pets establish emotional attachments to children, and the
              relationship turns out positive in terms of affective aspects, in
              reinforcement of the child´s personality.
            </p>
            <img className="w-[15%]" src={walkingDog} alt="" />
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-between ">
          <div className="p-4 flex flex-col gap-4 border-2 border-slate-200 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={paw} alt="" />
              <h1 className="text-green-900 font-medium">Communication</h1>
            </div>
            <p>
              Animals can communicate better with people in such conditions, as
              verbal communication is replaced by non-verbal.
            </p>
            <img className="w-[15%]" src={standingDog} alt="" />
          </div>
          <div className="p-4 flex flex-col gap-4 border-2 border-slate-200 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={paw} alt="" />
              <h1 className="text-green-900 font-medium">Health</h1>
            </div>
            <p>
              Some studies suggest that owning a pet can lower blood pressure
              and improve heart health.
            </p>
            <img className="w-[15%]" src={sittingCat} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
