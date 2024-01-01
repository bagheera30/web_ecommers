import React, { useState } from "react";

import axios from "axios";

function FormProduct(getproduct) {
  const [product, setProduct] = useState(getproduct.product);
  const [image, setImage] = useState(product.image);
  console.log("🚀 ~ file: FormProduct.tsx:7 ~ FormProduct ~ product:", product);

  const handleChange = (event) => {
    const upload = event.target.files[0];
    let fileData = {
      file: upload,
      image: URL.createObjectURL(upload),
      [event.target.name]: event.target.value,
    };

    setProduct({ ...product, ...fileData });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      await axios.patch(
        "http://localhost:3000/products/" + product.id,
        product
      );
      // Handle successful response, e.g., display a success message or redirect

      window.location.href = "/admin";
    } catch (error) {
      throw error;
      console.log(" ~ file: FormProduct.tsx:19 ~ handleSubmit ~ error:", error);
      // Handle error, e.g., display an error message
    } // Send updated product data
  };

  return (
    // ALFIAN KERJAKAN DISINI
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
        <img src={image} alt="tempat image dengan nama {product.name}" />
        <label htmlFor="Image">Image:</label>
        <input
          type="file"
          id="Image"
          name="Image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default FormProduct;
