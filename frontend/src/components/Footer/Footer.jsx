import React from "react";
import logo from "../../assets/logo.svg";
import copyright from "../../assets/copyright_icon.svg";
import insta from "../../assets/instagram_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";
import whatsapp from "../../assets/whatsapp_icon.svg";
import facebook from "../../assets/facebook_icon.svg";
import twitter from "../../assets/twitter_icon.svg";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between h-1/4 pt-8 bg-blue-400 bg-opacity-20">
      <div className="left relative left-16 mb-20 flex flex-col space-y-4">
        <div>
          <a href="">
            <img src={logo} alt="" />
          </a>
          <div className="flex items-center mt-4">
            <img src={copyright}/>
            <span className="text-gray-600">copyright 2024, HackHive</span>
          </div>
        </div>
        <div>
          <h1 className="text-black font-semibold font-nunito-sans text-4xl leading-normal tracking-wider">
            Empowering <span className="text-blue-500">Innovators</span>,
          </h1>
          <h1 className="text-black font-semibold font-nunito-sans text-4xl leading-normal tracking-wider">
            Elevating <span className="text-orange-400">Software</span>.
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full ring-1 ring-slate-900/5 shadow-lg hover:bg-blue-400 hover:bg-blue-400">
            <img src={insta} alt="" className="w-9 h-9" />
          </a>
          <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
            <img src={linkedin} alt="" className="w-9 h-9" />
          </a>
          <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
            <img src={whatsapp} alt="" className="w-9 h-9" />
          </a>
          <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
            <img src={facebook} alt="" className="w-9 h-9" />
          </a>
          <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
            <img src={twitter} alt="" className="w-9 h-9" />
          </a>
        </div>
      </div>
      <div className="right flex relative mr-12 ml-8 mb-6">
        <div className="mx-12 space-y-3">
          <h1 className="text-gray-600 font-medium font-sans text-lg">COMMUNITY</h1>
          <div className="space-y-1.5 text-gray-600">
            <p>Organize a hackathon</p>
            <p>Explore hackathons</p>
            <p>Code of conduct</p>
            <p>Brand Assets</p>
          </div>
        </div>
        <div className="mx-12 space-y-3">
          <h1 className="text-gray-600 font-medium font-sans text-lg">COMPANY</h1>
          <div className="space-y-1.5 text-gray-600">
            <p>About</p>
            <p>Jobs</p>
            <p>Blogs</p>
            <p>Changelog</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
        <div className="mx-12 space-y-3">
          <h1 className="text-gray-600 font-medium font-sans text-lg">SUPPORT</h1>
          <div className="space-y-1.5 text-gray-600">
            <p>Help</p>
            <p>Refund Policy</p>
            <p>Status</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
