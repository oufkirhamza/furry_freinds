import React, { createContext, useState } from "react";
import pet1 from "../assets/img/pet1.png";
import pet2 from "../assets/img/pet2.png";
import pet3 from "../assets/img/pet3.png";
import pet4 from "../assets/img/pet4.png";
import pet5 from "../assets/img/pet5.png";
import pet6 from "../assets/img/pet6.png";
import pet7 from "../assets/img/pet7.png";
import pet8 from "../assets/img/pet8.png";
import pet9 from "../assets/img/pet9.png";
import pet10 from "../assets/img/pet10.png";
import pet11 from "../assets/img/pet11.png";
import pet12 from "../assets/img/pet12.png";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [dataPets, setDataPets] = useState([
    {
      id: 1,
      name: "Pitter",
      city: "California",
      gender: "male",
      breed: "Dog",
      age: 6,
      size: "Large",
      story:
        "Pitter is a friendly, playful, smart male dog. Only adapted to a house.",
      images: [pet1, "URL_to_Pitter's_image2"],
      isLike: true,
      isNew: false,
    },
    {
      id: 2,
      name: "Hero",
      city: "Texas",
      gender: "male",
      breed: "Cat",
      age: 6,
      size: "Small",
      story:
        "Hero is a playful, smart male cat. You can keep him in an apartment.",
      images: [pet2, "URL_to_Hero's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 3,
      name: "Magie",
      city: "Florida",
      gender: "female",
      breed: "Shiba Inu",
      age: 6,
      size: "Large",
      story:
        "Magie currently lives with two children age 7 and 13 and has many visitors to the house which are children she is great with kids. There's lots of cats birds etc around the area and in the garden on most days as she's not fussed by these.",
      images: [pet3, "URL_to_Magie's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 4,
      name: "Lola",
      city: "Tennessee",
      gender: "female",
      breed: "Dog",
      age: 6,
      size: "Small",
      story:
        "Lola is a friendly, playful, smart female dog. Only adapted to a house.",
      images: [pet4, "URL_to_Lola's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 5,
      name: "Felix",
      city: "Arizona",
      gender: "male",
      breed: "Cat",
      age: 7,
      size: "Small",
      story:
        "Felix currently lives with two children age 7 and 13 and has many visitors to the house which are children he is great with kids. There's lots of cats birds etc around the area and in the garden on most days as he's not fussed by these.",
      images: [pet5, "URL_to_Felix's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 6,
      name: "Snoopy",
      city: "Ohio",
      gender: "male",
      breed: "Dog",
      age: 6,
      size: "Large",
      story:
        "Snoopy is a playful, smart male dog. You can keep him in an apartment.",
      images: [pet6, "URL_to_Snoopy's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 7,
      name: "Balto",
      city: "Michigan",
      gender: "male",
      breed: "Dog",
      age: 5,
      size: "Large",
      story:
        "Balto is a friendly, playful, smart male dog. Only adapted to a house.",
      images: [pet7, "URL_to_Balto's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 8,
      name: "Nala",
      city: "Alabama",
      gender: "female",
      breed: "Cat",
      age: 6,
      size: "Small",
      story:
        "Nala is a playful, smart male cat. You can keep him in an apartment.",
      images: [pet8, "URL_to_Nala's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 9,
      name: "Max",
      city: "Kentucky",
      gender: "male",
      breed: "Dog",
      age: 5,
      size: "Large",
      story:
        "Max is a friendly, smart male dog. You can keep him in an apartment.",
      images: [pet9, "URL_to_Max's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 10,
      name: "Cheshire",
      city: "Nebraska",
      gender: "male",
      breed: "Cat",
      age: 7,
      size: "Small",
      story:
        "Cheshire is a playful, smart male cat. You can keep him in an apartment.",
      images: [pet10, "URL_to_Cheshire's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 11,
      name: "Shadow",
      city: "Mississippi",
      gender: "male",
      breed: "Dog",
      age: 5,
      size: "Large",
      story:
        "Shadow is a playful, smart male dog. You can keep him in an apartment.",
      images: [pet11, "URL_to_Shadow's_image2"],
      isLike: false,
      isNew: false,
    },
    {
      id: 12,
      name: "Simba",
      city: "Nevada",
      gender: "male",
      breed: "Cat",
      age: 5,
      size: "Small",
      story:
        "Simba is a friendly, smart male cat. You can keep him in an apartment.",
      images: [pet12, "URL_to_Simba's_image2"],
      isLike: false,
      isNew: false,
    },
  ]);

  return (
    <>
      <MyContext.Provider value={{ dataPets, setDataPets }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
