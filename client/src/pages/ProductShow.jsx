import React from 'react';
import './ProductShow.css'; // Import the CSS file for styling

function ProductShow({name, description, price}) {
    return (
        <>
            <div className="product-container">
                <div className="product-title">
                    <h2>{name}</h2>
                </div>
                <div className="product-description">
                    <p>{description}</p>
                </div>
                <div className="product-price">
                    <p>{price}</p>
                </div>
            </div>
        </>
    );
}

export default ProductShow;
