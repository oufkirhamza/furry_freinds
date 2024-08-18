import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import jenny from "../../assets/img/jenny.png";
import ricky from "../../assets/img/ricky.png";

const Review = () => {
  const reviews = [
    {
      name: "Jenny B",
      image: jenny,
      rate: 4,
      when: "1/30/2024",
      description: `This rescue is based in Mt. Prospect, IL. I don't believe any of these out-of-state reviews are for this actual organization because my experience was amazing. The woman who runs it was friendly and wanted the necessary information to make a decision as to if we were able to adopt it .`,
    },
    {
      name: "Ricky F",
      image: ricky,
      rate: 2,
      when: "5/10/2023",
      description: `here appears to be some excellent organizations, but many are heart sting names that are simply a cover. But, your time can be consumed immensely because the most attractive pets remain on long after they have been removed, if they ever really existed at all.`,
    },
  ];
  return (
    <div className="p-16 flex justify-between">
      <div className="flex flex-col gap-3 w-[60%]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium text-green-800">Write a Review</h1>
          <div className="flex p-3 gap-3 rounded-lg  items-center bg-slate-200/50">
            <p>Select Your Rating</p>
            <div className="flex gap-2 text-alpha">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
        </div>
        <textarea
          name=""
          rows={15}
          placeholder="Type here ..."
          className="p-3 border-2 border-slate-200 rounded-lg"
          id=""
        ></textarea>
        <div className="flex justify-end pt-4">
          <button className="px-4 py-2 bg-alpha text-white rounded-lg">
            Post Review
          </button>
        </div>
      </div>
      <div className="w-[20%] px-3 bg-slate-100 rounded-lg">
        {reviews.map((e, index) => (
          <div className="flex flex-col gap-2 p-4" key={index}>
            <div className="flex gap-3 items-center">
              <img src={e.image} alt="" />
              <h1 className="font-medium">{e.name}</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {Array.from({ length: e.rate }).map((_, i) => (
                  <FaStar className="text-alpha" key={index} />
                ))}
                {Array.from({ length: 5 - e.rate }).map((_, i) => (
                  <FaRegStar className="text-alpha" key={index} />
                ))}
              </div>
              <p>{e.when}</p>
            </div>
            <p className="">{e.description}</p>
            <p className="cursor-pointer text-alpha">Read more</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
