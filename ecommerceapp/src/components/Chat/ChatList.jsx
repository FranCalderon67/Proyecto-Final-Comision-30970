import React from "react";
import Chat from "./Chat";
// import AgrMensaje from "../AgrMensaje/AgrMensaje";

function ChatList({ msj }) {
    return (
        <div>
            {msj &&
                msj.map((m) => {
                    return < Chat msj={m} />;
                })}
        </div>
    );
}




export default ChatList;
