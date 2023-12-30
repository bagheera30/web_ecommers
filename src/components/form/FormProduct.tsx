import React, { useState } from "react";

import axios from "axios";

function FormProduct(getproduct) {
  const [product, setProduct] = useState(getproduct.product);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      await axios.patch(
        "http://localhost:3000/products/" + product.id,
        product
      );
      // Handle successful response, e.g., display a success message or redirect
      console.log("Success!");
      window.location.href = "/admin";
    } catch (error) {
      console.log(" ~ file: FormProduct.tsx:19 ~ handleSubmit ~ error:", error);
      // Handle error, e.g., display an error message
    } // Send updated product data
    console.log(
      "🚀 ~ file: FormProduct.tsx:26 ~ handleSubmit ~ product.id:",
      product.id
    );
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
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default FormProduct;
