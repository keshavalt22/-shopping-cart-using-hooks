import AsideLeft from "./AsideLeft";
import Header from "./Header";
import Product from "./Products";
import Cart from "./Cart";
import AsideRight from "./AsideRight";
import products from "../data/data";
import React, { useState } from "react";

function App() {

  const [active, setActive] = useState("");
  const [option, setOption] = useState("");
  const [items, setItems] = useState([]);


  const handleClick = (size) => {
    setActive(size);
  }

  const handleChange = (event) => {
    setOption(event.target.value);
  }

  const addtoCart = (product) => {
    setItems(prevState => [...prevState, product]);
  }


  let productData = products;
  productData = active === '' ? productData : productData.filter(product => product.availableSizes.includes(active));

  if (option === 'l') {
    productData = productData.sort((a, b) => a.price - b.price);
  } else if (option === 'h') {
    productData = productData.sort((a, b) => b.price - a.price);
  } else productData = productData;

  let selectedItems = items;

  console.log(selectedItems)
  return (
    <div className="container">
      <Header />
      <main>
        <AsideLeft products={products} activeSize={handleClick} />
        <Product products={productData} selectedItem={addtoCart} />
        <div>
          <AsideRight activeOption={handleChange} selectedOption={option} />
          <Cart items={selectedItems} />
        </div>
      </main>
    </div>
  );
}

export default App;
