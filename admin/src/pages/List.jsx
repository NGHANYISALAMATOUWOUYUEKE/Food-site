import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

//display all the items store in the database
const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  //to remove food items
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-column flex flex-col gap-[10px] ">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-1 border-[#cacaca] text-[13px] title bg-[#f9f9f9] max-600:hidden ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="list-table-format max-600:grid-cols-[1fr_3fr_1fr] max-600:gap-[15px] grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-1 border-[#cacaca] text-[13px]"
            >
              <img
                className="w-[50px]"
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p>{item.name} </p>
              <p>{item.category} </p>
              <p>${item.price} </p>
              <p
                onClick={() => removeFood(item._id)}
                className="cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
