import {makeAutoObservable,action,runInAction} from "mobx";
import api from "../http/serviceAxios.js";

class MessagesStore{
    chatid;
    userid;
    name;
    activity;
    messages = [];
    Selected = false;
    loadState;
    constructor() {
        makeAutoObservable(this)
    }
    async isSelected(chatId,nickname){
        if (this.chatid === chatId){

            this.Selected = !this.Selected
            return
        }
        this.Selected = true
        this.loadState = false

        this.chatid = chatId
        const messages = await api.post('/content/messages',{chatId})
        this.messages = messages.data
        this.name = nickname


        this.loadState = true
    }
    Message(message){
        const mes = this.messages
        mes.push(message)
        this.messages = mes
    }
}
export default new MessagesStore