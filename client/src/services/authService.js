import axios from "axios";
import api from "../http/serviceAxios.js";



const login = async (loginValue) =>{

    const [loginLogining,passwordLogining] = loginValue

    api.post('http://localhost:8000/api/auth/login',{
        login:loginLogining,
        password:passwordLogining
    }).then((res) => {
        if (res.status === 200){
            location.reload()
        }
        console.log(res);
    }).catch((err)=> {console.log(err)})

}


export {login}