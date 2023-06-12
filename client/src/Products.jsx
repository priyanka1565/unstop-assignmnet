import axios from "axios";
import React, { useState } from "react";

//create a product
const Product = () => {
  const [state, setState] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChangle = (filledName) => (event) => {
    const { value } = event.target;
    setState((preState) => ({
      ...preState,
      [filledName]: value,
    }));

    //update product
  };
  console.log(state, "product_name");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click");
    if (state) {
      axios
        .post("https://fakestoreapi.com/products", {
          body: JSON.stringify(state),
          headers: {
            // 'Authorization': `bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res, "res");
        });
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            :Title
            <input
              type="text"
              placeholder="Enter Title"
              value={state.title}
              onChange={handleChangle("title")}
            />
          </label>
          <label htmlFor="">
            :Price
            <input
              type="text"
              placeholder="Enter Price"
              value={state.price}
              onChange={handleChangle("price")}
            />
          </label>
          <label htmlFor="">
            :Description
            <input
              type="text"
              placeholder="Enter Description"
              value={state.description}
              onChange={handleChangle("description")}
            />
          </label>
          <label htmlFor="">
            :Image
            <input
              type="text"
              placeholder=" Enter URL"
              value={state.image}
              onChange={handleChangle("image")}
            />
          </label>
          <label htmlFor="">
            :Category
            <input
              type="text"
              placeholder="Enter Category"
              value={state.category}
              onChange={handleChangle("category")}
            />
          </label>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
