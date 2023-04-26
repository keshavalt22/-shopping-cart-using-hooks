import React from 'react';


function Cart(props) {

    console.log(props.items[0])
    let prices = props.items.map(item => item.price);
    console.log(prices)
    let totalPrice = prices.reduce((pv, cv) => pv + cv, 0);
    console.log(totalPrice)

    return (
        <div className='carttogo'>
            <h2>Cart</h2>
            <div className='items'>
                {
                    props.items.map((item, i) => {
                        return (
                            <div className='item'>
                                <img src={`./static/products/${item.sku}_2.jpg`} alt=""></img>
                                <h3>{item.title}</h3>
                                <h4>${item.price}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <h5>Total Price: ${totalPrice}</h5>
        </div>
    )
}

export default Cart;