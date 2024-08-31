import React from 'react'
import ProductForm from './pages/ProductForm'
import ProductShow from './pages/ProductShow'

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

  return (
    <>
    <ProductForm/>
   
   
  { data.map((item, index) =>(
       <ProductShow name = {item.productName} description = {item.productDescription} price = {item.productPrice} key={index}/>
    )
    )
  }
    </>
  )
}

export default App