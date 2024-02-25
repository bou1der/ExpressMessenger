import React from 'react'
import DialogInfo from "./dialogInfo.jsx";
import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";

function messagesBlock({yourId,sendMessage,nickname,messages}){
    const [txtMessage,setTxtMessage] = React.useState('')
    return(
        <>
            <DialogInfo nickname={nickname}/>

            <div className="messegesBlock">
                {messages.data &&
                    messages.data.map((message)=>{return(
                        <>
                            <div className={`message ${`${yourId}` === message.message.from ? `sender_me` : 'sender_other'}`}>
                                <div><img src={"#"} alt={''}/></div>
                                <p>{message.message.text}</p>
                            </div>
                        </>
                    )})
                }
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