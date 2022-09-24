import React from "react";
import './chat.css'


function Chat({ msj }) {
    return (
        <>
            <div key={msj._id}>
                <span ><img className="avatar" src={msj.author.avatar} alt="PERFIL" /></span>
                <span className="autor">{msj.author.alias} <span className="hora"> {msj.fyh}: </span></span>
                <span className="mensaje">{msj.text}</span>
            </div>

        </>
    )
}


export default Chat