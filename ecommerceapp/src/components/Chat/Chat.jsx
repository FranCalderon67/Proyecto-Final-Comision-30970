import React from "react";
import './chat.css'
import WebSocket from "./WebSocket";

function Chat({ msj }) {
    return (
        <>
            <section>
                <h1>Centro de Mensajes</h1>
                <input type="email" id="username" placeholder="Ingresá tu email" />
                <input type="text" id="firstname" placeholder="Ingresá tu nombre" />
                <input type="text" id="lastname" placeholder="Ingresá tu apellido" />
                <input type="text" id="age" placeholder="Ingresá tu edad" />
                <input type="text" id="alias" placeholder="Ingresá tu alias" />
                <input type="text" id="avatar" placeholder="Ingresá tu avatar (url)" />

                <div key={msj._id}>
                    <span ><img className="avatar" src={msj.avatar} alt="PERFIL" /></span>
                    <span className="autor">{msj.alias} <span className="hora"> {msj.fyh}: </span></span>
                    <span className="mensaje">{msj.text}</span>
                </div>

                <form id="formularioMensaje" className="chat-container">
                    <input placeholder="Mensaje" type="text" id="text" required />
                    <button id="btnEnviar" type="submit" onClick={WebSocket}>Enviar</button>
                </form>

            </section>

        </>
    )
}


export default Chat