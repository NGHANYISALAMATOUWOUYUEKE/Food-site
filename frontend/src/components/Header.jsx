import React from "react";

const Header = () => {
  return (
    <div className="header h-[34vw] my-[30px] mx-auto bg-headerImg bg-contain relative ">
      <div className="header-content max-750:max-w-[65%] max-1050:max-w-[45%]   absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn ">
        <h2 className="font-[500] text-white text-[max(4.5vw,22px)] ">
          Order your favourite food here{" "}
        </h2>
        <p className="max-750:hidden text-white text-[1vw]">
          Choose from the diverse menu featuring a delectable array of dishes
          crafted with the finest. our mission is to satify your cravings and
          elevate your dining experience, one delicious meal a at time.{" "}
        </p>
        <button className="max-750:py[2vw] max-750:px-[4vw] border-none font-[500] py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
