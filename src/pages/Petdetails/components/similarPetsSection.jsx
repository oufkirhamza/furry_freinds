import React, { useContext } from "react";
import { MyContext } from "../../../utils/contextProvider";
import { useNavigate } from "react-router-dom";

const SimilarPetsSection = () => {
  const { dataPets } = useContext(MyContext);
  const arraySimilars = dataPets.filter((pet) => "Dog" == pet.breed);
  const similarPets = [];
  const navigate = useNavigate();
  // console.log(arraySimilars);
  if (arraySimilars.length > 4) {
    for (let index = 0; index < 4; index++) {
      const element = arraySimilars[index];
      similarPets.push(element);
    }
  } else {
    similarPets = arraySimilars;
  }

  return (
    <div className="flex flex-col py-16 ">
      <h1 className="text-3xl font-medium mb-20 text-center text-green-900">
        Similar Pets
      </h1>
      <div className="flex justify-center gap-5 ">
        {similarPets.map((element, index) => (
          <div
            key={index}
            className="flex bg-slate-50 w-[19%] rounded-lg flex-col font-medium items-center gap-2 px-3 pt-16 pb-2 relative"
          >
            <img
              className="absolute w-28 h-28 rounded-full object-cover -top-[25%]"
              src={element.images[0]}
              alt=""
            />
            <h1 className="text-alpha">{element.name}</h1>
            <h1 className="capitalize">{element.gender}</h1>
            <h1>{element.breed}</h1>
            <button
              onClick={() => {
                navigate(`/adopt_a_pet/${element.id}`);
              }}
              className="border-2 w-full border-alpha text-alpha py-2 rounded-lg"
            >
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPetsSection;
