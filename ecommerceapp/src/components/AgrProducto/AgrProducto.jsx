import React from "react";
import './agrProducto.css'
import WebSocket from "./WebSocket";
function AgrProducto() {
    // const enviarProducto = (e) => {
    //     e.preventDefault()
    //     let name = document.getElementById("nombreProducto").value;
    //     let price = document.getElementById("precioProducto").value;
    //     let image = document.getElementById("imagenProducto").value;
    //     let category = document.getElementById("categoriaProducto").value
    //     const producto = { name, price, image, category };
    //     name = "";
    //     price = "";
    //     image = "";
    //     category = "";
    //     WebSocket(producto)
    //     return false;
    // };


    return (
        <>
            <h1>Agregar productos</h1>
            <div>
                <form className="form-flex-container" action="http://localhost:8080/productos" method="POST">
                    <label htmlFor="name">Nombre</label>
                    <input id="nombreProducto" type="text" name="name" />
                    <label htmlFor="image">Imagen</label>
                    <input id="imagenProducto" type="text" name="image" />
                    <label htmlFor="price">Precio</label>
                    <input id="precioProducto" type="number" name="price" />
                    <label htmlFor="categoria">Categoria</label>
                    <input id="categoriaProducto" type="text" name="categoria" />
                    <button type="submit" onClick={WebSocket}> Cargar Producto</button>
                </form>
            </div>

        </>


    )
}


export default AgrProducto;