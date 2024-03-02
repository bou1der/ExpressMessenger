import React from "react";
import User from './userInMessageList.jsx'
import MessagesBlock from "./messagesBlock.jsx"
import './messegesPage.css'
import {observer} from "mobx-react-lite";

import {v4 as uuidv4} from 'uuid'
//services
import {sendMessage} from "../../services/messagesService.js";
import {getChats} from "../../services/GenerateContentService.js";
import messagesStore from "../../stores/MessagesStore.js"

import webSock from "../../services/webSock.js";

// services

const UserMessages = observer(() => {
    const [messages,setMessages] = React.useState([])
    const [users, setUsers] = React.useState(undefined)
    const [id,setId] =React.useState(undefined)
    webSock.messageEventSocket(messages,setMessages)

    React.useEffect( () => {
        const fetchData = async () => {
            const res = await getChats()
            if (res.status === 200) {
                setUsers(res.data[0])
                setId(res.data[1])
                return;
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
                                <User key={user.chatid}  chatid={user.chatid} nickname={user.nickname}/>
                                <div key={uuidv4()} className={"separator"}></div>
                            </>
                        )
                    })
                }
            </article>
            <article className="blockMesseges">
                {messagesStore.Selected ?
                    messagesStore.loadState? <MessagesBlock messages={messages} setMessages={setMessages} yourId={id} sendMessage={sendMessage} nickname={messagesStore.name}/> : <div>Анимация загрузки</div>

                    :
                    <h1>Выберите диалог</h1>}
            </article>
        </div>

    );
})

export default UserMessages
