import React, { useContext } from "react";
import { StoreContext } from "../components/Storecontext";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form
        action=""
        className="place-order flex items-start justify-between gap-[50px] mt-[100px]"
      >
        <div className="place-order-left w-[100%] max-w-[max(30%,500px)] ">
          <p className="title text-[30px] font-[600] mb-[50px]">
            Delivery Information
          </p>
          <div className="multi-fields flex gap-[10px">
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="First name"
            />
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2  border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
            type="text"
            placeholder="Email address"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields flex gap-[10px">
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="City"
            />
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields flex gap-[10px">
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="Zip code"
            />
            <input
              className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="mb-[15px] w-[100%] p-[10px] border-2 border-[#c5c5c5] rounded-[4px] outline-[tomato]"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="place-order-right w-[100%] max-w-[max(40%,500px)]">
          <div className="cart-total flex-1 flex max-750:flex-col flex-row gap-[20px]">
            <div>
              <h2>Cart Totals</h2>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
              <button className="border-none text-[white] bg-[tomato] w-[max-(15vw,200px)] p-[12px] mt-[30px] rounded-[4px] cursor-pointer">
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeorder;
