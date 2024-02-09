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

export default api;