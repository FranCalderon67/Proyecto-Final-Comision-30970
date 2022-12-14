import React from "react";
import { Link } from "react-router-dom";

import axios from "axios"


const eliminarItem = async (_id) => {
    return await axios.delete(`http://localhost:8080/productos/${_id}`)
}

const Item = ({ item }) => {




    return (
        <>
            <div key={item._id} className="card" style={{ width: "18rem" }}>
                <div>
                    <img className="card-img-top" src={item.image} alt="ERROR" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>

                    <p>$ {item.price}</p>
                </div>

                <Link to={`/productos/${item._id}`} type="button" className="btn btn-primary">
                    Más Información
                </Link>

                <button className="btn btn-danger" onClick={() => eliminarItem(item._id)}>Eliminar Producto</button>

            </div>
        </>
    );
};

export default Item;
