import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  
     // Assuming the product data is static in this example.
  // In a real application, you might fetch this from a server or context.
  const products = [
    {
      id: 1,
      name: "Men's Essential Tee (Rust)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 2,
      name: "Men's Essential Tee (Deep Forest)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 3,
      name: "Men's Essential Tee (Stone)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 4,
      name: "Men's Essential Tee (Charcoal)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 5,
      name: "Men's Essential Tee (Washed Indigo)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 6,
      name: "Men's Essential Tee (Black)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 7,
      name: "Men's Essential Tee (Gray)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
    {
      id: 8,
      name: "Men's Essential Tee (Olive)",
      description: "Soft and comfortable essential tee.",
      price: "$30.00",
      image: "https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
    },
  ];
 

  const product = products.find(item => item.id.toString() === productId);

  if (!product) {
    navigate('/ProductDetails');
    return null;
  }

  return (
    <div className="single-product">
      <div className="product-images">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="small-images">
          <img src={product.image} alt={product.name} className="small-image" />
          <img src={product.image} alt={product.name} className="small-image" />
          <img src={product.image} alt={product.name} className="small-image" />
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="product-price">{product.price}</p>
        <div className="product-colors">
          <p>Color:</p>
          <div className="color-options">
            <div className="color-option" style={{ backgroundColor: '#F2AB5C' }}></div>
            <div className="color-option" style={{ backgroundColor: 'black' }}></div>
            <div className="color-option" style={{ backgroundColor: '#263F54' }}></div>
          </div>
        </div>
        <div className="product-buttons">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-wishlist">Add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
