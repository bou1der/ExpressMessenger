import axios from "axios";
import api from "../http/serviceAxios.js";
import routerStore from "../stores/store.js";
import WebSock from "./webSock.js"


const login = async (loginValue) =>{

    const [loginLogining,passwordLogining] = loginValue

    await api.post('/auth/login',{
        login:loginLogining,
        password:passwordLogining
    }).then((res) => {
        if (res.status === 200) {
            routerStore.setAuht(true)
            WebSock.connectSock()
        }
        console.log(res);
    }).catch((err)=> {console.log(err)})

}
const register = async (registerValue) =>{
    const [nicknameRegister,loginRegister,passwordRegister] = registerValue;
    api.post('/auth/register', {
        login:`${loginRegister}`,
        password:`${passwordRegister}`,
        nickname:`${nicknameRegister}`
    }).then((res)=>{
        // setData(res.data);
        console.log(res)
        if (res.status === 200){
            routerStore.setAuht(true)
            WebSock.connectSock()
        }
    }).catch((err)=>
        {
            console.log(err);
        })
}

const logout = () =>{
    api.post('/auth/logout').then(res => {
        if(res.status === 200){
            localStorage.removeItem('token')
            routerStore.setAuht(false)
            WebSock.closeSock()
        }
    }).catch(err => {
        console.log(err)
    })
}
const refresh = async () =>{
    try{
        const res = await axios.get('http://localhost:8000/api/auth/refresh',{withCredentials:true})
        localStorage.setItem('token',res.data.accessToken)
        WebSock.connectSock()
    }catch (e){
        console.log(e.config?.response?.message)
    }
}
export {login, register,logout,refresh}