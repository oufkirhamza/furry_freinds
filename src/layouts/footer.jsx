import React, { useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    const input = useRef();
  return (
    <div>

    <div className="bg-slate-100 flex justify-around text-alpha p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-green-900 text-2xl">How Can I Help ?</h1>
        <p>Adopt a pet</p>
        <p>Rehome a pet</p>
        <p>Adopt FAQ's</p>
        <p>Rehome FAQ's</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-green-900 text-2xl">Contact Us</h1>
        <div className="flex items-center gap-2">
          <MdLocationPin />
          <p>123 Main Street, Anytown,USA</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt /> <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail />
          <p>FurryFriendsSupport@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-green-900 text-2xl">Keep In Touch With Us</h1>
        <p className="w-[80%]">Join the FurryFriends magazine and be first to hear about news</p>
        <div className="flex gap-3">
          <div onClick={()=>input.current.focus()}  className="w-full border-2 border-slate-200 rounded-lg p-2 flex items-center gap-3 bg-white">
            <MdEmail className="text-slate-400 text-2xl" />
            <input ref={input} className="outline-none w-full" type="text" placeholder="E-mail Adress" />
          </div>
          <button className="border-2 text-alpha px-3 rounded-lg border-alpha">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="bg-alpha flex items-center justify-between text-white px-16 py-4 ">
        <p>©2024 Furryfriends.com</p>
        <div className="flex gap-4 text-2xl">
            <FaFacebook/>
            <FaPinterest/>
            <FaInstagram/>
            <FaYoutube/>
        </div>
    </div>
    </div>
  );
};
