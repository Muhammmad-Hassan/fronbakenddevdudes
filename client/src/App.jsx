import React from 'react'
import ProductForm from './pages/ProductForm'
import ProductShow from './pages/ProductShow'
import { useEffect , useState } from 'react'
import axios from "axios"
import ProductDetails from './pages/ProductDetails'

function App() {
  const data = [{
    productName :  "shirt",
     productDescription:  "Hello this is ",
      productPrice : "$30"
  },{
    productName :  "shirt1",
     productDescription:  "Hello this is ",
      productPrice : "$30"
  },{
    productName :  "shirt2",
     productDescription:  "Hello this is ",
      productPrice : "$30"
  },{
    productName :  "shirt3",
     productDescription:  "Hello this is ",
      productPrice : "$30"
  },{
    productName :  "shirt4",
     productDescription:  "Hello this is ",
      productPrice : "$30"
  }]


  const [product , setProduct]  = useState([])


  const fetchProducts = async () => {
    try {
        const resp = await axios.get("http://127.0.0.1:5000/api/getproducts");
        
        setProduct(resp.data)
    } catch (error) {
        console.log( "resp err : " ,error.message)
    }

   
  };
 useEffect(()=>{
  fetchProducts()
    } , [])
   




  return (
    <>
    <ProductForm  fetchProducts={fetchProducts}/>
    <ProductDetails/>
   
   
  { product.map((item, index) =>(
       <ProductShow name = {item.productTitle} description = {item.productDescription} price = {item.productPrice} key={index}/>
    )
    )
  }
    </>
  )
}

export default App