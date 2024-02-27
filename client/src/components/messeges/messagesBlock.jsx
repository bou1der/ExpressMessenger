import React from 'react'
import DialogInfo from "./dialogInfo.jsx";
import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";

import MessagesStore from '../../stores/MessagesStore.js';

function messagesBlock({yourId,sendMessage,nickname,messages,setMessages}){
    const [txtMessage,setTxtMessage] = React.useState('')
    // const [messages,setMessages] = React.useState([])
    // React.useEffect(()=>{
    //     setMessages(messageReq.data)
    // },[])
    return(
        <>
            <DialogInfo nickname={nickname}/>

            <div className="messegesBlock">
                {messages &&

                    messages.map((el)=>{return(
                        <>
                            <div className={`message ${yourId === Number(el.message.from) ? 'sender_me' : 'sender_other'}`}>
                                <div><img src={"#"} alt={''}/></div>
                                <p>{el.message.text}</p>
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
                    sendMessage(setMessages,messages,txtMessage,yourId,MessagesStore.id)
                }}><img src={SendMessageButtonSrc}  alt=""/></button>
            </span>
        </>
    )
}

export default messagesBlock