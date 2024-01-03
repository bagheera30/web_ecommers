import React, { useState } from "react";

import axios from "axios";

function FormProduct(getproduct) {
  const [product, setProduct] = useState(getproduct.product);
<<<<<<< HEAD
  const [image, setImage] = useState(product.image);

  const handleChange = (event) => {
    const upload = event.target.files[0];
    let fileData = {
      file: upload,
      image: URL.createObjectURL(upload),
      [event.target.name]: event.target.value,
    };

    setProduct({ ...product, ...fileData });
=======

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
>>>>>>> 8603220851209c742d2d00daa77e64d743d106e7
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      await axios.patch(
        "http://localhost:3000/products/" + product.id,
        product
      );
      // Handle successful response, e.g., display a success message or redirect
<<<<<<< HEAD

      window.location.href = "/admin";
    } catch (error) {
      throw error;
      console.log(" ~ file: FormProduct.tsx:19 ~ handleSubmit ~ error:", error);
      // Handle error, e.g., display an error message
    } // Send updated product data
  };

  return (
    <>
      <h1 className="text-black text-4xl font-bold mb-3">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label className="text-black font-bold text-2xl mb-3">
            Produk Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-2">
          <label className="text-black font-bold text-2xl mb-3">
            Deskripsi
          </label>
          <textarea
            name="deskripsi"
            value={product.deskripsi}
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-2">
          <label className="text-black font-bold text-2xl mb-3">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-2">
          <label className="text-black font-bold text-2xl mb-3">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-3">
          <label className="text-black font-bold text-2xl mb-3">Image</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full btn btn-neutral bg-red-600">
            UPDATE Product
          </button>
        </div>
      </form>
    </>
=======
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
>>>>>>> 8603220851209c742d2d00daa77e64d743d106e7
  );
}

export default FormProduct;
