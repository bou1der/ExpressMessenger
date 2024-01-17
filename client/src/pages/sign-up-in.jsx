import React from "react";
import Sign from "../components/sign-up-in/Sign.jsx";
import axios from "axios";


function SignPage(){
    // const [data,setData] = React.useState(null)
    function logining(){
    console.log("log")
    }
    async function Registers(loginRegister,passwordRegister,nicknameRegister){
        await axios.post("http://localhost:8000/api/auth/register", {
            loginRegister,
            passwordRegister,
            nicknameRegister
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
             <Sign logining={logining} Registers={Registers}/>
        </div>
    );
}
export default SignPage;