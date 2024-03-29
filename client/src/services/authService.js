import axios from "axios";
import api from "../http/serviceAxios.js";




const login = async (loginValue) =>{

    const [loginLogining,passwordLogining] = loginValue

    await api.post('/auth/login',{
        login:loginLogining,
        password:passwordLogining
    }).then((res) => {
        if (res.status === 200){
            location.reload()
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
        console.log(res.data)
        if (res.status === 200){
            location.reload()
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
            location.reload()
        }
    }).catch(err => {
        console.log(err)
    })
}
const refresh = async () =>{
    await api.get('/auth/refresh').then(res=>{
        console.log(res)
    }).catch(e =>{
        console.log(e)
    })
}
const checkAuth = async () =>{
    try{
        const res = await axios.get('http://localhost:8000/api/auth/refresh',{withCredentials:true})

        localStorage.setItem('token',res.data.accessToken)
    }catch (e){
        console.log(e.config?.response?.message)
    }
}
export {login, register,logout,refresh,checkAuth}