import React from "react";
import logo from "../assets/img/logo.png";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-around py-3">
        <img className="w-[10%]" src={logo} alt="furry freinds logo" />
        <div className="flex items-center gap-6 font-medium">
          <Link>Adopt</Link>
          <Link>Rehome</Link>
          <Link>Care Guide</Link>
          <Link>About Us</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg flex justify-center items-center border-2 border-primary text-alpha  ">
            <FaRegBell />
          </div>
          <div className="p-2 rounded-lg flex gap-2 justify-center items-center  border-2 border-primary text-alpha ">
            <FaRegUserCircle />
            <p>Login</p>
            <p>|</p>
            <p>Register</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end  bg-primary px-8 py-0.5">
        <div className="flex justify-between items-center bg-white px-2 rounded">
          <input placeholder="search ..." className="px-2 outline-none" type="text" />
          <IoMdSearch />
        </div>
      </div>
    </div>
  );
};
