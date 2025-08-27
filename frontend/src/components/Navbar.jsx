import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "./Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar p-[20px] flex justify-between items-center ">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="logo w-[150px] max-1050:w-[140px] max-900:w-[120px] "
        />
      </Link>

      <ul className="navbar-menu flex gap-[20px] text-[#49557e] text-[18px] cursor-pointer max-1050:gap-[20px] max-1050:text-[17px] max-900:gap-[15px] max-900:text-[16px] max-750:hidden ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "active pb-[2px] border-b-[2px] border-[#49557e]"
              : ""
          }
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "active pb-[2px] border-b-[2px] border-[#49557e]"
              : ""
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "active pb-[2px] border-b-[2px] border-[#49557e]"
              : ""
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={
            menu === "contact us"
              ? "active pb-[2px] border-b-[2px] border-[#49557e]"
              : ""
          }
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right flex items-center gap-[40px] max-1050:gap=[30px] max-900:w-[20px] ">
        <img
          className="max-1050:w-[22px] max-900:w-[20px] "
          src={assets.search_icon}
          alt=""
        />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "":"dot absolute bg-[tomato] min-w-[10px] min-h-[10px] rounded-[5px] top-[-8px] right-[-8px] "}></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[16px] text-[#49557e] border-2 border-[tomato] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-[3000ms] max-1050:py-[8px] max-1050:[25px] max-900:py-[7px] max-900:px-[20px] max-900:text-[15px] "
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
