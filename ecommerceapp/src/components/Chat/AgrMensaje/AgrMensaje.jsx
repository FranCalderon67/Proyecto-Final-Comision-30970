import React from "react";
import './agrMensaje.css'
import WebSocket from './WebSocket'
function AgrMensaje() {
    return (
        <>
            <section>
                <h1>Centro de Mensajes</h1>
                <form id="formularioMensaje" className="chat-container" action="http://localhost:8080/mensajes" method="POST">
                    <input type="email" id="username" name="username" placeholder="Ingresá tu email" />
                    <input type="text" id="firstname" name="firstname" placeholder="Ingresá tu nombre" />
                    <input type="text" id="lastname" name="lastname" placeholder="Ingresá tu apellido" />
                    <input type="text" id="age" name="age" placeholder="Ingresá tu edad" />
                    <input type="text" id="alias" name="alias" placeholder="Ingresá tu alias" />
                    <input type="text" id="avatar" name="avatar" placeholder="Ingresá tu avatar (url)" />
                    <input placeholder="Mensaje" type="text" id="text" name="text" required />
                    <button id="btnEnviar" type="submit" onClick={WebSocket}>Enviar</button>
                </form>
            </section>
        </>
    )
}


export default AgrMensaje;



