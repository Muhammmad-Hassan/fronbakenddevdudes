import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
const baseUrlLocal = "http://localhost:5000/api"
  const getProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BAKEND_URL}/products/getproducts`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      const data = await getProducts();
      setProducts(data.data);
    };

    fetchAllProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/SingleProduct/${productId}`);
  };

  return (
    <div className="product-details">
      <section className="hero-section">
        <img 
          src="https://t3.ftcdn.net/jpg/07/05/62/96/240_F_705629683_9g3iGCmIZr0r3kE1SXr9S3pdlvJsiDnR.jpg" 
          className="hero-image" 
          alt="Hero" 
        />
      </section>

      <section className="product-catalog">
        <h1>PRODUCTS</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="product-card" 
              onClick={() => handleProductClick(product._id)}
            >
              <img src={product.image} alt={product.productTitle} className="product-image" />
              <h3 className="product-name">{product.productTitle}</h3>
              <p className="product-description">{product.productDescription}</p>
              <p className="product-price">{product.productPrice}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
