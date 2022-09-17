import React from "react";
import './agrProducto.css'
import WebSocket from "./WebSocket";
function AgrProducto() {

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
                    <input id="categoriaProducto" type="text" name="category" />
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea id="descripcionProducto" type="text" name="description" />
                    <button className="btn btn-primary" type="submit" onClick={WebSocket}> Cargar Producto</button>
                </form>
            </div>
        </>
    )
}


export default AgrProducto;