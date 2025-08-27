import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-[500]">Explore our menu</h1>
      <p className="explore-menu-text max-1050:max-w-[100%] max-1050:text-[14px] max-w-[60%] ">
        Choose from the diverse menu featuring a delectable array of dishes
        crafted with the finest. our mission is to satify your cravings and
        elevate your dining experience, one delicious meal a at time.{" "}
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll scrollbar-hide ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[2000ms] ${
                  category === item.menu_name ? "active border-4 border-[tomato] p-0.5" : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] text-[#747474] font-[max(1.4vw,16px)] cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] bg-[#e2e2e2] border-none " />
    </div>
  );
};

export default ExploreMenu;
