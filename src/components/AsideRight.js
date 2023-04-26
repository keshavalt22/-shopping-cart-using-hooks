import React from "react";

function AsideRight(props) {
    return (
        <section className="aside aside-right">
            <label htmlFor="">Order by</label>
            <select name="sort" id="sort"
                value={props.selectedOption}
                onChange={(event) => props.activeOption(event)}
            >
                <option value="">Select</option>
                <option value="l">Low to high</option>
                <option value="h">High to low</option>

            </select>
        </section>
    )
}

export default AsideRight;