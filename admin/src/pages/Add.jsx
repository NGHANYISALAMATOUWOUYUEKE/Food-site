import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //api to link the admin to the database
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("Category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  };
  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px] ">
      <form
        action=""
        className="flex-column flex flex-col gap-[10px]  "
        onSubmit={onSubmitHandler}
      >
        <div className="add-img-upload flex-column flex flex-col gap-[10px] w-[120px] ">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>
        <div className="w-[max(40%,280px)] add-product-name flex-column flex flex-col gap-[10px] ">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-[10px]"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="w-[max(40%,280px)] add-product-description flex-column flex flex-col gap-[10px] ">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-[10px] text-black"
            name="description"
            rows="6"
            placeholder="Write content here"
          ></textarea>
        </div>

        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex-column flex flex-col gap-[10px] ">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              className="max-w-[120px] p-[10px]"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwish">Sandwish</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-column flex flex-col gap-[10px] ">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px]"
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
