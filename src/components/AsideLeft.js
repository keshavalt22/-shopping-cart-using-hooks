import React, { useState } from "react";



function AsideLeft(props) {
    const [active, setActive] = useState("")


    let sizeArray = props.products.map((product) => (
        product.availableSizes
    ))

    let sizes = [...new Set([].concat(...sizeArray))]

    let { activeSize } = active;

    return (
        <section className="aside aside-left">
            <h5>Sizes:</h5>
            <ul className="sizes">
                {
                    sizes.map((size, i) => {
                        return (
                            <li
                                key={i}
                                className={activeSize === size ? "active" : ""}
                                onClick={() => props.activeSize(size)}
                            >{size}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default AsideLeft;