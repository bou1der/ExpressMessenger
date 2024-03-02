import axios from "axios";
import api from "../http/serviceAxios.js";


const getChats = async () =>{
    const res = await api.get('/content/getchats')
    return res;
}
export {getChats}