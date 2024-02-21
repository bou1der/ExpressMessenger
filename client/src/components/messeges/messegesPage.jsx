import React from "react";
import User from './userInMessageList.jsx'
import SendMessageButtonSrc from  './resource/send_messege.svg'
import SendFilesButtonSrc from './resource/send_files.svg'
import DialogInfo from "./dialogInfo.jsx";

//services
import {sendMessage} from "../../services/messagesService.js";
import {getChats} from "../../services/GenerateContentService.js";
import api from "../../http/serviceAxios.js";
// services

function UserMessages({}) {
    const [txtMessage,setTxtMessage] = React.useState('')
    const [users, setUsers] = React.useState(undefined)

    React.useEffect( () => {
        const fetchData = async () => {
            const res = await getChats()
            if (res.status === 200) {
                setUsers(res.data)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="content">
            <article className="userMesseges">
                {users &&
                    users.map((user) => {
                        return (
                            <>
                            <User key={user.id} nickname={user.nickname}/>
                            <div className={"separator"}></div>
                            </>
                        )
                    })
                }


            </article>
            <article className="blockMesseges">
                <DialogInfo/>

                <div className="messegesBlock">
                    <div className="message sender_other">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>dadaasdasdasdasdakshdgaksujghdjhgaksdsdasdasdasdoujasygdkahsgdhagsd</p></div>
                    <div className="message sender_me">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>21341237461238764817263487612378461238764786123487612347861238746231876</p></div>
                    <div className="message sender_other">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>dadaasdasdasdasdakshdgaksujghdjhgaksdsdasdasdasdoujasygdkahsgdhagsd</p>
                    </div>
                    <div className="message sender_other">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>dadaasdasdasdasdakshdgaksujghdjhgaksdsdasdasdasdoujasygdkahsgdhagsd</p></div>
                    <div className="message sender_me">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>21341237461238764817263487612378461238764786123487612347861238746231876</p></div>
                    <div className="message sender_me">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>21341237461238764817263487612378461238764786123487612347861238746231876</p></div>
                    <div className="message sender_me">
                        <div><img src="../../resource/small_messege_avatar.svg" alt=""/></div>
                        <p>21341237461238764817263487612378461238764786123487612347861238746231876</p></div>
                </div>

                <span className="typeMessege">

                <button><img src={SendFilesButtonSrc} alt=""/></button>
                <div className="inputMessenge"><textarea value={txtMessage} onChange={(el) =>{
                    setTxtMessage(el.target.value)}} placeholder="Write a messege......"></textarea></div>
                <button onClick={() =>{
                    sendMessage(txtMessage)
                }}><img src={SendMessageButtonSrc}  alt=""/></button>
            </span>
            </article>
        </div>

    );
}

export default UserMessages
