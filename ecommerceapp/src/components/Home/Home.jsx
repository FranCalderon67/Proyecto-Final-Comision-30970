import React from "react";
import AgrMensaje from "../Chat/AgrMensaje/AgrMensaje";
import AgrProducto from "../Productos/AgrProducto/AgrProducto";
import ItemListContainer from "../Productos/ItemListContainer";
import ChatContainer from "../Chat/ChatContainer";
function Home() {
    return (
        <>
            <AgrProducto />
            <ItemListContainer />
            <AgrMensaje />
            <ChatContainer />
        </>
    )
}

export default Home