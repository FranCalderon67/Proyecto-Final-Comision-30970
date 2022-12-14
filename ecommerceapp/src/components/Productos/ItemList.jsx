import React from "react";
import Item from "./Item";
import './productos.css'

function ItemList({ productos }) {
    return (
        <div className="product-flex--container">
            {productos &&
                productos.map((p) => {
                    return <Item item={p} />;
                })}
        </div>
    );
}




export default ItemList;
