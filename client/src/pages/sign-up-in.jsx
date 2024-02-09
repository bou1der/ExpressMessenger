import React from "react";
import Sign from "../components/sign-up-in/Sign.jsx";
import axios from "axios";
import {login} from "../services/authService.js";

function SignPage(){
    // const [data,setData] = React.useState(null)
    async function Registers(registerValue){
        const [nicknameRegister,loginRegister,passwordRegister] = registerValue;
        console.log(nicknameRegister,loginRegister,passwordRegister)
        await axios.post("http://localhost:8000/api/auth/register", {
            login:`${loginRegister}`,
            password:`${passwordRegister}`,
            nickname:`${nicknameRegister}`
        })
            .then((res)=>{
                // setData(res.data);
                console.log(res.data)})
            .catch((err)=>
            {
                console.log(err);
            })

    }

    return(
        <div style={{width: "100%", height:"100%",display:"flex", alignItems: "center", justifyContent: "center"}}>
             <Sign Logining={login} Registers={Registers}/>
        </div>
    );
}
export default SignPage;