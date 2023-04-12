import { useState } from 'react';
import OrderBy from './OrderBy';


function Products(props) {
    let [selectedOrder, setSelectedOrder] = useState("");
    function handleOrderBy(event) {
        setSelectedOrder({ selectedOrder: event.target.value });
    };

    function handleOrderProducts(order, products) {
        let sortedProducts = [...products];
        if (order === "highest") {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }
        if (order === "lowest") {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        }
        return sortedProducts;
    };

    let products = handleOrderProducts(selectedOrder.selectedOrder, props.products);


    return (
        <>
            <div>
                <div className="products-filter">
                    <p>
                        {`${products.length} Product${products.length > 1 ? "s" : ""
                            } found.`}{" "}
                    </p>
                    <OrderBy
                        selectedOrder={selectedOrder}
                        handleOrderBy={handleOrderBy}
                    />
                </div>
                <div className="flex wrap">
                    {products.map((product) => (
                        <Product {...product} />
                    ))}
                </div>
            </div>
        </>
    )
}

function Product(props) {
    return (
        <div className="product-item">
            <div className="product-label">Free Shipping</div>
            <img
                className="product-item-img"
                src={`/static/products/${props.sku}_1.jpg`}
                alt={props.title}
            />
            <div className="product-item-details">
                <p className="product-item-title">{props.title}</p>
                <div className="line"></div>
                <h3 className="product-item-price">
                    {props.currencyFormat + props.price}
                </h3>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}
export default Products;