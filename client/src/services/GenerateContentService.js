import axios from "axios";
import api from "../http/serviceAxios.js";

const getChats = async () =>{
    const res = await api.get('/content/getchats')
        if (!res.status === 200){
            return;
        }
        console.log(res)
        return res;
}
export {getChats}