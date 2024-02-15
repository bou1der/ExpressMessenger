import axios from "axios";

const url = 'http://localhost:8000/api'
const api = axios.create({
    withCredentials:true,
    baseURL:url
})
api.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
api.interceptors.response.use((config) =>{
    if (config.config.url === "/auth/register" || config.config.url === "/auth/login" || config.config.url === "/auth/refresh"){
        localStorage.setItem("token", config.data.JWTtokens.accessToken)
    }

    return config;
})

export default api;