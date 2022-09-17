import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Chat from "../Chat";
// import AgrMensaje from "./AgrMensaje";
const ENDPOINT = "http://localhost:8080/mensajes";

const WebSocket = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("new_message", data => {
            setResponse(data);
        });
    }, []);

    return (
        <Chat msj={response} />
    );
}

export default WebSocket;