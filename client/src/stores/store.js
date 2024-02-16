import {makeAutoObservable, observable} from "mobx"

class routerStore {
    state = null
    constructor() {
    makeAutoObservable(this)
    }
    setAuht(state){
        this.state = state
    }
}
export default new routerStore();