import axios from "axios";
import api from "../http/serviceAxios.js";
import messagesStore from "../stores/MessagesStore.js";
import {refresh} from "./authService.js";
import messages from "../pages/messages.jsx";

const getChats = async () =>{
    const res = await api.get('/content/getchats')

    return res;
}
const getMessages = async (userId,nickname) =>{
    if (messagesStore.id === userId){
        messagesStore.isSelected(false)
        return;
    }else {
        messagesStore.isSelected(true)
        messagesStore.id = userId
        messagesStore.name = nickname
    }
    messagesStore.setLoadState(false)
    const res = await api.get('/content/messages')
    if (!res.status === 200){
        return
    }
    messagesStore.messages = res
    messagesStore.setLoadState(true)
}
export {getChats,getMessages}