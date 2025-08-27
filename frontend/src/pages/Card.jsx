import React, { useContext } from "react";
import { food_list } from "../assets/assets";
import { StoreContext } from "../components/Storecontext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qauntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title my-[10px] text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)]">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer">x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom  mt-[80px] flex justify-center gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex max-750:flex-col flex-row gap-[20px]">
          <div>
          <h2>Cart Totals</h2>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate('/order')} className="border-none text-[white] bg-[tomato] w-[max-(15vw,200px)] p-[12px] rounded-[4px] cursor-pointer">PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode max-750:justify-start flex-1">
            <div>
              <p className="text-[#555]">If you have a promr code,Enter it here </p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px] ">
                <input className="bg-transparent border-none outline-none pl-[10px] " type="text" placeholder="Promo code" />
                <button className=" w-[max-(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px] ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
