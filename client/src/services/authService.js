import axios from "axios";
import api from "../http/serviceAxios.js";



const login = async (loginValue) =>{

    const [loginLogining,passwordLogining] = loginValue

    await api.post('/auth/login',{
<<<<<<< HEAD
>>>>>>> e9b733e (Final signUp?(нет))
=======
>>>>>>> b43163c (fix)
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