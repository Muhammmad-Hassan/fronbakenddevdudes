import React from "react";
import ProductForm from "./pages/ProductForm";
import ProductShow from "./pages/ProductShow";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <>
    <ProductForm  fetchProducts={fetchProducts}/>
    <ProductDetails/>
   
   
  { product.map((item, index) =>(
       <ProductShow name = {item.productTitle} description = {item.productDescription} price = {item.productPrice} image={item.image} key={index}/>
    )
    )
  }
    </>
  );
}

export default App;
