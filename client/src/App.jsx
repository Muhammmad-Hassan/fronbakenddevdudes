import React, { useEffect, useState } from "react";
import ProductForm from "./pages/ProductForm";
import ProductShow from "./pages/ProductShow";
import ProductDetails from "./pages/ProductDetails";
import SingleProduct from './pages/SingleProduct';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 
  const [product, setProduct] = useState([]);
  axios.defaults.withCredentials = true;

  const fetchProducts = async () => {
    try {
      const resp = await axios.get("https://bacdkend-api.vercel.app/api/getproducts");
      setProduct(resp.data);
    } catch (error) {
      console.log("resp err : ", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/SingleProduct/:productId" element={<SingleProduct />} />
    
       
        <Route 
          path="/" 
          element={
            <>
              <ProductForm fetchProducts={fetchProducts} />
              {product.map((item, index) => (
                <ProductShow
                  name={item.productTitle}
                  description={item.productDescription}
                  price={item.productPrice}
                  image={item.image}
                  key={index}
                />
              ))}
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
