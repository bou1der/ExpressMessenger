import axios from "axios";
import api from "../http/serviceAxios.js";



const login = async (loginValue) =>{

    const [loginLogining,passwordLogining] = loginValue

<<<<<<< HEAD
    api.post('/auth/login',{
=======
    await api.post('/auth/login',{
>>>>>>> e9b733e
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


export {login, register}