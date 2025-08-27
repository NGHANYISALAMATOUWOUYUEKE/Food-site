import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./Storecontext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="food-item w-[100%] m-auto rounded-[15px] transition animate-fadeIn duration-1000 ">
      <div className="food-item-image-container relative">
        <img className="food-item-image rounded-t-[15px]" src={image} alt="" />
        {!cartItems[id] ? (
            <img
              className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%] "
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white ">
              <img className="w-[30px]"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img className="w-[30px]"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
      </div>
      <div className="food-item-info p-[20px] ">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
          
        </div>
        <p className="food-item-desc text-[#676767] text-[12px]">
          {description}
        </p>
        <p className="food-item-price text-[tomato] font-[500] mt-[10px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
