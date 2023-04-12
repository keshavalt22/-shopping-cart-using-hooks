import React from "react";
import Products from "./Products";
import data from '../data.json';
import Sidebar from "./Sidebar";
import Cart from "./Cart";


function App(props) {
    return (
        <main>
            <div className="wrapper flex space-between">
                <Cart />
                <Sidebar products={data.products} />
                <Products products={data.products} />
            </div>
        </main>
    )
}

export default App;