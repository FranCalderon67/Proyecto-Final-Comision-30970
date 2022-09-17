import React from "react";
import './productos.css'
function ItemCount({ clickMenos, count, clickMas }) {
    return (
        <>
            <div className="contador">
                <button type="button" className="btn btn-dark" onClick={clickMenos}>
                    -
                </button>

                <p>{count}</p>
                <button type="button" className="btn btn-dark" onClick={clickMas}>
                    +
                </button>
            </div>
        </>
    );
}

export default ItemCount;