import React from "react";
import userLogo from './resource/user_logo.svg'

export const User = ({id,nickname,getMessages,setMessages}) =>{
    return(
        <div className="user" onClick={() =>{getMessages(id,nickname,setMessages)}}>
            <img src={userLogo} alt=""/>
                <div className="user_info">
                    <h3>{nickname}</h3>
                    <p>you:last_message</p>
                </div>
                <div className="timeblock">
                    <p>17.12.2023</p>
                </div>
        </div>
    );
}
export default User;