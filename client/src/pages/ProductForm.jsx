import React, { useState } from 'react';
import './ProductForm.css'; // Import the CSS file

function ProductForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("Product Title:", productTitle);
        console.log("Product Price:", productPrice);
        console.log("Product Description:", productDescription);
    };

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="ProductTitle" className="form-label">Product Title: </label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    id="ProductTitle"
                    value={productTitle}
                    onChange={handleTitleChange}
                    className="form-input"
                />

                <label htmlFor="ProductPrice" className="form-label">Product Price: </label>
                <input
                    type="text"
                    placeholder="Enter product price"
                    id="ProductPrice"
                    value={productPrice}
                    onChange={handlePriceChange}
                    className="form-input"
                />

                <label htmlFor="ProductDescription" className="form-label">Product Description: </label>
                <textarea
                    placeholder="Enter product description"
                    id="ProductDescription"
                    value={productDescription}
                    onChange={handleDescriptionChange}
                    className="form-textarea"
                />

                <button type="submit" className="form-button">Submit</button>
            </form>
        </>
    );
}

export default ProductForm;
