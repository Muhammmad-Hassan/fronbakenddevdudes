import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  
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

  const handleProductClick = (productId) => {
    navigate(`/SingleProduct/${productId}`);
  };

  return (
    <div className="product-details">
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src="https://t3.ftcdn.net/jpg/07/05/62/96/240_F_705629683_9g3iGCmIZr0r3kE1SXr9S3pdlvJsiDnR.jpg" 
          className="hero-image" 
          alt="Hero" 
        />
      </section>

      {/* Product Catalog */}
      <section className="product-catalog">
        <h1>PRODUCTS</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card" 
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
