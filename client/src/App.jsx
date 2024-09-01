import React from "react";
import ProductForm from "./pages/ProductForm";
import ProductShow from "./pages/ProductShow";
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
<<<<<<< HEAD
      <ProductForm fetchProducts={fetchProducts} />

      {product.map((item, index) => (
        <ProductShow
          name={item.productTitle}
          description={item.productDescription}
          price={item.productPrice}
          key={index}
        />
      ))}
=======
    <ProductForm  fetchProducts={fetchProducts}/>
   
   
  { product.map((item, index) =>(
       <ProductShow name = {item.productTitle} description = {item.productDescription} price = {item.productPrice} image={item.image} key={index}/>
    )
    )
  }
>>>>>>> ff2048ac98cd9b7ee679b268222dfdf61b44cc81
    </>
  );
}

export default App;
