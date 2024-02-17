import React from "react";
import {logout} from "../services/authService.js"
function IndexPage(){

    return(
        <>
            <button onClick={logout} style={{zIndex:2,position:"absolute"}}>ВЫЙТИ</button>
        </>
    )
}
export default IndexPage