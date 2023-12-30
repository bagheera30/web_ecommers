import axios from "axios";
import React, { useState } from "react";
import { axiosIntense } from "../../libs/axios";

const FormAdd = () => {
  const [product, setProduct] = useState({
    name: "",
    deskripsi: "",
    quantity: 0,
    price: 0,
    Image: "",
  });
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      await axiosIntense.post("/products", product);
      // Handle successful response, e.g., display a success message or redirect
      console.log("Success!");
      window.location.href = "/admin";
    } catch (error) {
      console.log(" ~ file: FormProduct.tsx:19 ~ handleSubmit ~ error:", error);
      // Handle error, e.g., display an error message
    } // Send updated product data
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <label htmlFor="deskripsi">Product Description:</label>
        <textarea
          className="textarea"
          id="deskripsi"
          name="deskripsi"
          value={product.deskripsi}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <label htmlFor="Image">Image:</label>
        <input
          type="text"
          id="Image"
          name="Image"
          value={product.Image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default FormAdd;
