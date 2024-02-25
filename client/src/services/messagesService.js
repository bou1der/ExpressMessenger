import webSock from "./webSock.js";

const sendMessage = (setMessages,messages,text,sendTo) =>{
    webSock.ws.send(JSON.stringify({text}))
    const addMessage = {message:{id:3,chatid:12,text:text,from:"2",to:"2"}}
    setMessages([...messages,addMessage])

}



export {sendMessage}