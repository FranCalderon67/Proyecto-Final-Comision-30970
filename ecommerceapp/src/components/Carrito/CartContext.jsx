import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItem = (item, cantidad) => {
        if (cartItems.some((producto) => producto._id === item._id)) {
            const copy = [...cartItems];
            const itemRepetido = cartItems.findIndex((producto) => producto._id === item._id);
            copy[itemRepetido] = { ...copy[itemRepetido], cantidad: copy[itemRepetido].cantidad + cantidad };

            setCartItems(copy);
            setCartCount((prev) => prev + cantidad);
        } else {
            setCartItems([...cartItems, { ...item, cantidad }]);
            setCartCount((prev) => prev + cantidad);
        }
    };

    const vaciarCarrito = () => {
        setCartItems([]);
        setCartCount(0);
    };

    const eliminarItem = (_id, count) => {
        const carritoNuevo = cartItems.filter((e) => e._id !== _id);
        setCartCount(cartCount - count);
        setCartItems(carritoNuevo);
    };

    const totalCompra = () => {
        return cartItems.reduce((acum, item) => acum + item.price * item.cantidad, 0);
    };

    return <CartContext.Provider value={{ cartItems, cartCount, addItem, eliminarItem, vaciarCarrito, totalCompra }}>{children}</CartContext.Provider>;
}

export { CartContext };
export { useCartContext };
export { CartProvider };