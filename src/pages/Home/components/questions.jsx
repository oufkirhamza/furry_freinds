import React from "react";
import review from "../../../assets/img/review.svg";

export const Questions = () => {
  const reviews = [
    {
      icon: review,
      title: "FAQ's for Pet Adopters",
      description:
        "If you are thinking about adopting a pet, we know you'll have lots of things to consider. Click here to see some of the most frequently asked questions.",
    },
    {
      icon: review,
      title: "FAQ's for Pet Rehomers",
      description:
        "Finding a new home for your pet doesn't need to be a daunting task.",
    },
  ];
  return (
    <div className="flex flex-col gap-5 items-center py-6">
      <h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
      <div className="flex gap-5 justify-center">
        {reviews.map((element, index) => (
          <div key={index} className="w-[25%] rounded-lg border-2 border-slate-200 p-5 gap-4 flex flex-col items-center  text-center">
            <img src={element.icon} alt="" />
            <h1 className="text-purple-700">{element.title}</h1>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
