import React from "react";
import { useCartContext } from "./CartContext";
import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";
import './carrito.css'
function Cart() {
    const { cartItems } = useCartContext();
    const { eliminarItem } = useCartContext();
    const { vaciarCarrito } = useCartContext();
    const { totalCompra } = useCartContext();

    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className="columnFlex">
                        <h1 className="titulos">Carrito Vacio</h1>
                        <Link to="/" className="regresarInicio">
                            Vuelve a ver todos nuestros productos
                        </Link>
                    </div>
                </>
            ) : (
                cartItems.map((i) => {
                    return (
                        <>
                            <div className="flexCarrito">
                                <img className="imgCarrito" src={i.image} alt="ERROR" />
                                <p className="descripcionCarrito">
                                    {i.name} x {i.cantidad} Total = $ {i.price * i.cantidad}
                                </p>
                                <button className="btn btn-warning btnCarrito" onClick={() => eliminarItem(i._id, i.cantidad)}>
                                    <TiTrash style={{ width: "35", height: "35" }} />
                                </button>
                            </div>
                        </>
                    );
                })
            )}

            {cartItems.length === 0 ? (
                ""
            ) : (
                <>
                    <p className="totalCompra">Total $ {totalCompra()} </p>
                    <button className="btn btn-danger btnVaciarCarrito" onClick={vaciarCarrito}>
                        Vaciar Carrito
                    </button>
                    <Link to="./finalizarcompra">
                        <button className="btn btn-success btnVaciarCarrito">Realizar Pago</button>
                    </Link>
                </>
            )}
        </>
    );
}

export default Cart;