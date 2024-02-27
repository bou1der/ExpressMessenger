import webSock from "./webSock.js";

const sendMessage = (setMessages,messages,text,sender,sendTo) =>{
    webSock.ws.send(JSON.stringify({text,from:sender,to:sendTo}))
    const addMessage = {message:{id:3,chatid:12,text:text,from:sender,to:sendTo}}
    setMessages([...messages,addMessage])   

}



export {sendMessage}