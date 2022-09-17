import React from "react";
import { useEffect, useState } from "react";
import ChatList from "./ChatList";

import axios from "axios";

//Aca tengo que consumir la DB

function ChatContainer() {
    const [mensajes, setMensajes] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getData = async () => {
        try {
            const msjCollection = await axios.get('http://localhost:8080/mensajes')
            setMensajes(msjCollection.data);
            setCargando(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {cargando ? (
                <p>Cargando Chat</p>
            ) : (
                <section>

                    <ChatList msj={mensajes} />
                </section>
            )}
        </>
    );
}

export default ChatContainer;