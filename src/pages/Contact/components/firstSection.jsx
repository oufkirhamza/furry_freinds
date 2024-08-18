import React from "react";
import girlPets from "../../../assets/img/Girl_with_all_pets.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
const FirstSection = () => {
  return (
    <div className="flex gap-3 justify-center p-16">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Contact Us</h1>
        <p>
          Get in touch with our team by choosing what kind of our services you
          are looking for.
        </p>
        <img src={girlPets} alt="girl with pets" />
        <div className="flex flex-col gap-3 border-2 border-slate-200 text-xl rounded-lg p-4 text-alpha">
          <div className="flex gap-3 items-center ">
            <FaLocationDot /> <p>123 Main Street, Anytown,USA</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneAlt /> <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaEnvelope />
            <p>FurryFriendsSupport@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-[35%] flex flex-col gap-3 p-5 rounded-lg bg-gray-100 ">
        <div className="flex items-center gap-3">
            <IoMdPaw className="text-alpha text-2xl"/>
          <h1>Ready to help you</h1>{" "}
        </div>
        <div className="flex flex-col gap-1">
          <label> Name</label>
          <input
            className="p-3 border-2 border-slate-200 rounded-md"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label> Email</label>
          <input
            className="p-3 border-2 border-slate-200 rounded-md"
            type="email"
            placeholder="Your Email address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label> Phone number</label>
          <input
            className="p-3 border-2 border-slate-200 rounded-md"
            type="number"
            placeholder="Your Phone"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label> Message</label>
          <textarea
            name=""
            id=""
            className="p-4"
            rows={8}
            placeholder="Tell us about your request"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-alpha px-7 py-2 text-white rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
