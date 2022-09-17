import React from "react";
import './agrMensaje.css'
import WebSocket from './WebSocket'
function AgrMensaje() {
    return (
        <>
            <section>
                <h1>Centro de Mensajes</h1>
                <form id="formularioMensaje" className="chat-container" method="post" action="http://localhost:8080/mensajes">
                    <input type="email" id="username" placeholder="Ingresá tu email" />
                    <input type="text" id="firstname" placeholder="Ingresá tu nombre" />
                    <input type="text" id="lastname" placeholder="Ingresá tu apellido" />
                    <input type="text" id="age" placeholder="Ingresá tu edad" />
                    <input type="text" id="alias" placeholder="Ingresá tu alias" />
                    <input type="text" id="avatar" placeholder="Ingresá tu avatar (url)" />
                    <input placeholder="Mensaje" type="text" id="text" required />
                    <button id="btnEnviar" type="submit" onClick={WebSocket}>Enviar</button>
                </form>
            </section>
        </>
    )
}


export default AgrMensaje;