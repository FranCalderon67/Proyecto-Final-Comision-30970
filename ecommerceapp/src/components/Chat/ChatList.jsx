import React from "react";
import Chat from "./Chat";


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
