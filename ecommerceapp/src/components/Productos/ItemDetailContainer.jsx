import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import axios from "axios";


function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(false);
    const { _id } = useParams();

    const getElegido = async () => {
        const document = await axios.get(`http://localhost:8080/productos/${_id}`)
        setTimeout(() => {
            try {
                setProducto(document.data);
                setCargando(true);
            } catch (error) {
                console.log("error", error);
            }
        }, 3000)
    };

    useEffect(() => {
        getElegido();
    });

    return <>
        {cargando ?
            <ItemDetail item={producto} /> :
            <img className="cargando" src={"https://images-na.ssl-images-amazon.com/images/I/8168SYLpnrL.png"} alt='Cargando' />}
    </>;
}

export default ItemDetailContainer;
