import {makeAutoObservable} from "mobx";

class MessagesStore{
    id;
    name;
    activity;
    messages;
    Selected = false;
    loadState;
    constructor(id,nickname) {
        makeAutoObservable(this)
        this.id = id;
        this.name = nickname
    }
    isSelected(state){
        if (state){
            return this.Selected = state
        }
        this.Selected = !this.Selected
        console.log(this.Selected)
    }
    setLoadState(state){
        this.loadState = state
    }
}
export default new MessagesStore