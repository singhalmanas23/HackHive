import React from "react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-80vw mx-auto font-nunito-sans my-7 text-lg">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="" className="w-48 h-auto ml-8" />
        </a>
      </div>
      <ul className="flex items-center space-x-6">
        <li>
          <a href="/hackathons" className="text-lg font-semibold hover:text-blue-500">
            Hackathon
          </a>
        </li>
        <li>
          <a href="" className="text-lg font-semibold hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="" className="text-lg font-semibold hover:text-blue-500">
            Blog
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4 mr-8">
        <button className="px-4 py-2 border border-gray-300 rounded font-semibold text-lg text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 mx-4" onClick={() => navigate("/host")}>
          Host
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 mr-30" onClick={() => navigate("/login")}>
          Log In
        </button>
      </div>
    </div>
  );
}
