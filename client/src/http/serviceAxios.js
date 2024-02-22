import axios from "axios";
import {refresh} from "../services/authService.js"

const url = 'http://localhost:8000/api'
const api = axios.create({
    withCredentials:true,
    baseURL:url
})
api.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
    })
api.interceptors.response.use(async(config) =>{
    if (config.config.url === "/auth/register" || config.config.url === "/auth/login" || config.config.url === "/auth/refresh"){
        localStorage.setItem("token", config.data.JWTtokens.accessToken)
    }


    return config;
}, async function (error) {

    if (error.response.status === 402 || error.response.status === 405){
        console.log(error.response.status)
        await refresh()
    }
    return error;
})

export default api;