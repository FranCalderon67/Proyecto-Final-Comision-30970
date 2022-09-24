import React, { useState } from "react";
import './productos.css'
import BtnTerminarCompra from "../Carrito/BtnTerminarCompra";
import { Link } from "react-router-dom";
import { useCartContext } from '../Carrito/CartContext';
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    const [show, setShow] = useState(true);
    const [contador, setContador] = useState(0);
    const { addItem } = useCartContext();

    const incrementar = () => {

        setContador(contador + 1);

    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    function dobleFuncion() {
        if (contador === 0) {
            alert("Debes elegir una cantidad a comprar");
        } else {
            setShow(false);
            addItem(item, contador);
        }
    }

    return (
        <>
            <div className="flexDetail">
                <img className="portadaDetail" src={item.image} alt="ERROR" />
                {show === true ? (
                    <div className="itemDetail">
                        <h5 className="titulosDetail">{item.name}</h5>
                        <p className="itemPrice">$ {item.price}</p>
                        <p className="cantidadDetail">Cantidad</p>
                        <ItemCount clickMenos={restar} count={contador} clickMas={incrementar} />
                        <p className="itemDescription">Aca tengo que poner la descripcion del producto en la DB</p>
                        <div>
                            <button className="btn btn-primary btnDetail" condition disabled={show ? "" : "disabled"} onClick={dobleFuncion}>
                                Agregar al Carrito
                            </button>
                            <Link to="/">
                                <button className="btn btn-danger btnDetail">Volver</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <BtnTerminarCompra />
                        <Link to="/">
                            <button className="btn btn-primary btnDetail btnDetail_terminar_compra">Continuar Comprando</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default ItemDetail;