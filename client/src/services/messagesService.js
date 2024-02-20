import webSock from "./webSock.js";
const sendMessage = (text,sendTo) =>{
    webSock.ws.send(JSON.stringify({text}))
}


export {sendMessage}