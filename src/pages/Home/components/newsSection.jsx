import React from "react";
import img1 from "../../../assets/img/Image1.png";
import img2 from "../../../assets/img/Image2.png";
import img3 from "../../../assets/img/Image3.png";
import img4 from "../../../assets/img/Image4.png";

export const NewsSection = () => {
  const news = [
    {
      image: img1,
      title: "Dog Breeds",
      description:
        "The group of dogs of the original type includes hunting dogs, herding dogs, guard dogs, companion dogs and sled dogs.",
    },
    {
      image: img2,
      title: "Training cats",
      description:
        "The process of training the animal to be a grateful eater can take months. Cat training can be easier than you think",
    },
    {
      image: img3,
      title: "Nutrition of dogs",
      description:
        "Food intolerances in animals are a common problem. Dogs and cats in particular often experience food intolerances, which can lead to health problems.",
    },
    {
      image: img4,
      title: "Cat behavior",
      description:
        "Cats communicate with each other and with humans through their voices. We can learn to correctly understand cat language and its vocalizations.",
    },
  ];
  return (
    <div className="flex flex-col gap-7 py-6 items-center">
      <h1 className="text-3xl font-medium">Pet News</h1>
      <div className="flex justify-center gap-3">
        {news.map((element, index) => (
          <div className="flex flex-col border-2 border-slate-200 rounded-lg p-4 w-[20%] justify-between">
            <div className="flex flex-col gap-4">
              <img src={element.image} alt="" />
              <h1>{element.title}</h1>
              <p>{element.description}</p>
            </div>
            <p className="text-alpha cursor-pointer">Read more</p>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <button className="px-4 py-2 border-2 border-alpha text-alpha rounded-lg">Cat News</button>
        <button className="px-4 py-2 border-2 border-alpha text-alpha rounded-lg">Dog News</button>
      </div>
    </div>
  );
};
