import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px] " id="footer">
      <div className="footer-content max-750:flex max-750:flex-col max-750:gap-[35px] w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[20px] ">
        <div className="footer-content-left flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima vel cumque a, fugit saepe voluptate consequatur blanditiis
            nihil excepturi?
          </p>
          <div className="footer-social-icons flex">
            <img className="w-[40px] mr-[15px] " src={assets.facebook_icon} alt="" />
            <img className="w-[40px] mr-[15px] " src={assets.twitter_icon} alt="" />
            <img className="w-[40px] mr-[15px] " src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-[20px]">
          <h2 className="text-white">Company</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About us</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-[20px]">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">+1-212-456-7890</li>
            <li className="mb-[10px] cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] my-[20px] bg-gray-500 border-none " />
      <p className="footer-copy-wright max-750:text-center">
        Copyright 2024 &copy; Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
