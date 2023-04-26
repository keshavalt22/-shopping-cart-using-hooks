import React from 'react';

function Product(props) {


    return (
        <>
            <div className='products'>
                {
                    props.products.map((product, i) => {
                        return (
                            <div className='product' key={i}>
                                <img src={`./static/products/${product.sku}_1.jpg`} alt="" />
                                <h3>{product.title}</h3>
                                <span></span>
                                <h4>${product.price}</h4>
                                <button className='btn'
                                    onClick={() => props.selectedItem(product)}
                                >Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Product;