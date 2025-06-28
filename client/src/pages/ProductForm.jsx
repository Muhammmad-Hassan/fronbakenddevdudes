import React, { useEffect, useState } from "react";
import "./ProductForm.css";
import axios from "axios";

function ProductForm({ fetchProducts }) {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleTitleChange = (e) => setProductTitle(e.target.value);
  const handlePriceChange = (e) => setProductPrice(e.target.value);
  const handleDescriptionChange = (e) => setProductDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const baseUrlLocal = "http://localhost:5000/api"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_BAKEND_URL}/products/addproduct`,
        {
          productTitle,
          productPrice,
          image,
          productDescription,
        }
      );

      if (resp.status === 201) {
        setSuccessMessage("Product added successfully!");
        fetchProducts();

        // Clear form inputs
        setProductTitle("");
        setProductPrice("");
        setImage("");
        setProductDescription("");

        // Remove message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.log("resp err:", error.message);
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="ProductTitle" className="form-label">
          Product Title:
        </label>
        <input
          type="text"
          placeholder="Enter product name"
          id="ProductTitle"
          value={productTitle}
          onChange={handleTitleChange}
          className="form-input"
        />

        <label htmlFor="ProductPrice" className="form-label">
          Product Price:
        </label>
        <input
          type="text"
          placeholder="Enter product price"
          id="ProductPrice"
          value={productPrice}
          onChange={handlePriceChange}
          className="form-input"
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          placeholder="Enter the URL of the image"
          id="image"
          value={image}
          onChange={handleImageChange}
          className="form-input"
        />

        <label htmlFor="ProductDescription" className="form-label">
          Product Description:
        </label>
        <textarea
          placeholder="Enter product description"
          id="ProductDescription"
          value={productDescription}
          onChange={handleDescriptionChange}
          className="form-textarea"
        />

        <button type="submit" className="form-button">
          Submit
        </button>

        {/* Success Message */}
        {successMessage && (
          <p className="form-success">{successMessage}</p>
        )}
      </form>

      <img
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99fhttps://images.unsplash.com/photo-1565699297446-2d8e2a004a5b"
        alt=""
      />
    </>
  );
}

export default ProductForm;
