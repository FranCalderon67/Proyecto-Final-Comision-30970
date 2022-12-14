import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Item from "../Item";
const ENDPOINT = "http://localhost:8080/productos";

const WebSocket = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = io.connect(ENDPOINT);
        socket.on("new_products", data => {
            setResponse(data);
        });
    }, []);

    return (
        <Item item={response} />
    );
}

export default WebSocket;