import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import axios from "axios";


function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(false);
    const { _id } = useParams();

    const getElegido = async () => {
        try {
            const document = await axios.get(`http://localhost:8080/productos/${_id}`)
            setProducto(document.data);
            setCargando(true);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getElegido();
    });

    return <>{cargando ? <ItemDetail item={producto} /> : <p>Cargando</p>}</>;
}

export default ItemDetailContainer;
