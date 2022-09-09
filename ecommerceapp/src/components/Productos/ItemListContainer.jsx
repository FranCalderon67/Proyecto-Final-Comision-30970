import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import axios from "axios";

//Aca tengo que consumir la DB

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    // const { categoria } = useParams();

    const getData = async () => {
        try {
            const itemCollection = await axios.get('http://localhost:8080/productos')
            setProductos(itemCollection.data);
            setCargando(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    // const getDataCategoryQuery = async () => {
    //     try {
    //         const consulta = query(collection(db, "productos"), where("categoria", "==", categoria));
    //         const QuerySnapshot = await getDocs(consulta);

    //         setProductos(QuerySnapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })));
    //         setCargando(false);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {cargando ? (
                <p>Cargando</p>
            ) : (
                <section>
                    <ItemList productos={productos} />
                </section>
            )}
        </>
    );
}

export default ItemListContainer;