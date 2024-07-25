import { useContext } from "react";
import "./firstSection.sass";
import circle from '../../../assets/img/hero_circle.png'
import pets from '../../../assets/img/hero_pets.png'
import { MyContext } from "../../../utils/contextProvider";
export const FirstSection = () => {
  const [test, setTest] = useContext(MyContext);
  return (
    <div className="flex items-center justify-center  gap-5">
      <div className="w-[40%] flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl leading-snug font-medium w-[75%]">
          Give a New Life to <span className="text-[#675BC8]">Furry</span>{" "}
          <span className="text-[#2E256F]">Friends</span>{" "}
        </h1>
        <p className="text-lg text-start w-[70%]">
          Pet adoption and rehoming are both vital aspects of animal welfare,
          offering hope and a fresh start to pets in need. Open your heart and
          your home to a shelter pet.{" "}
        </p>
        <div className="flex gap-5">
          <button className="px-9 py-2.5 bg-alpha rounded-lg border-2 border-alpha text-white">Adopt Now</button>
          <button className="px-9 py-2.5 border-2 border-alpha rounded-lg">Rehome Now</button>
        </div>
      </div>
      <div className="relative w-[40%]">
        <img className="w-[90%]" src={circle} alt="circle" />
        <img className="w-[85%] absolute top-[18%] left-[15%]" src={pets} alt="pets" />
      </div>
    </div>
  );
};
