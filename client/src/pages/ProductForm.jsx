import React, { useState } from "react";
import "./ProductForm.css"; // Import the CSS file
import axios from "axios";

function ProductForm({fetchProducts}) {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setProductTitle(title);
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setProductPrice(price);
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setProductDescription(description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const resp = await axios.post("https://bacdkend-api.vercel.app/api/products", {
            productTitle,
            productPrice,
            productDescription,
          });
        console.log(resp.status)
          if(resp.status == "201"){
              console.log("create success!")
              fetchProducts()
          }
    } catch (error) {
        console.log( "resp err : " ,error.message)
    }
   
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="ProductTitle" className="form-label">
          Product Title:{" "}
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
          Product Price:{" "}
        </label>
        <input
          type="text"
          placeholder="Enter product price"
          id="ProductPrice"
          value={productPrice}
          onChange={handlePriceChange}
          className="form-input"
        />

        <label htmlFor="ProductDescription" className="form-label">
          Product Description:{" "}
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
      </form>
    </>
  );
}

export default ProductForm;
