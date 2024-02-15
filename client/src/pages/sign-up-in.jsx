import React from "react";
import Sign from "../components/sign-up-in/Sign.jsx";
import {login, register} from "../services/authService.js";

function SignPage(){
    // const [data,setData] = React.useState(null)

    return(
        <div style={{width: "100%", height:"100%",display:"flex", alignItems: "center", justifyContent: "center"}}>
             <Sign Logining={login} Registers={register}/>
        </div>
    );
}
export default SignPage;