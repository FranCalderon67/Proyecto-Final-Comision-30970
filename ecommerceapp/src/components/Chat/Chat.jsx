import React from "react";
import './chat.css'


function Chat({ msj }) {
    return (
        <>
            <div key={msj._id}>
                <span ><img className="avatar" src={msj.avatar} alt="PERFIL" /></span>
                <span className="autor">{msj.alias} <span className="hora"> {msj.fyh}: </span></span>
                <span className="mensaje">{msj.text}</span>
            </div>

        </>
    )
}


export default Chat