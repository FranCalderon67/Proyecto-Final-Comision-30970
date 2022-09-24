import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import axios from "axios";
import './productos.css'


function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { categoria } = useParams();

    const getData = async () => {
        const itemCollection = await axios.get('http://localhost:8080/productos')
        setTimeout(() => {
            try {
                setProductos(itemCollection.data);
                setCargando(false);
            } catch (error) {
                console.log("error", error);
            }

        }, 3000)
    };


    const getDataCategoryQuery = async () => {
        const consulta = await axios.get(`http://localhost:8080/productos/cat/${categoria}`)
        setTimeout(() => {
            try {
                setProductos(consulta.data);
                setCargando(false);
            } catch (error) {
                console.log("error", error);
            }
        }, 3000)
    };

    useEffect(() => {
        categoria ? getDataCategoryQuery() : getData();
    }, [categoria]);

    return (
        <>
            {cargando ? (
                <img className="cargando" src={"https://images-na.ssl-images-amazon.com/images/I/8168SYLpnrL.png"} alt='Cargando' />
            ) : (
                <section>
                    <ItemList productos={productos} />
                </section>
            )}
        </>
    );
}

export default ItemListContainer;