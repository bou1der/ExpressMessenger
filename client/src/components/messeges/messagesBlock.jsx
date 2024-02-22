import React from 'react'
import DialogInfo from "./dialogInfo.jsx";
import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";

function messagesBlock({sendMessage,nickname,messages}){
    const [txtMessage,setTxtMessage] = React.useState('')
    return(
        <>
            <DialogInfo nickname={nickname}/>

            <div className="messegesBlock">
                <div className="message sender_other">
                    <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                    <p>dadaasdasdasdasdakshdgaksujghdjhgaksdsdasdasdasdoujasygdkahsgdhagsd</p>
                </div>
                <div className="message sender_me">
                    <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                    <p>21341237461238764817263487612378461238764786123487612347861238746231876</p>
                </div>
                {messages.data.map((message)=>{console.log(message)})}
            </div>

            <span className="typeMessege">

                <button><img src={SendFilesButtonSrc} alt=""/></button>
                <div className="inputMessenge"><textarea value={txtMessage} onChange={(el) =>{
                    setTxtMessage(el.target.value)}} placeholder="Write a messege......"></textarea></div>
                <button onClick={() =>{
                    sendMessage(txtMessage)
                }}><img src={SendMessageButtonSrc}  alt=""/></button>
            </span>
        </>
    )
}

export default messagesBlock