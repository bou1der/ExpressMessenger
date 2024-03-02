import webSock from "./webSock.js";
import MessagesStore from "../stores/MessagesStore.js";


const sendMessage = (text,sender,setMessages,messages) =>{
    webSock.ws.send(JSON.stringify({chatid:MessagesStore.chatid,text,from:sender}))
    const addMessage = {chatid:MessagesStore.chatid,text:text,from:sender,error:false}
    setMessages([...messages,addMessage])
}



export {sendMessage}