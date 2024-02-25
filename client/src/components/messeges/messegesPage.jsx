import React from "react";
import User from './userInMessageList.jsx'
import MessagesBlock from "./messagesBlock.jsx"
import './messegesPage.css'
import {observer} from "mobx-react-lite";

import {v4 as uuidv4} from 'uuid'
//services
import {sendMessage} from "../../services/messagesService.js";
import {getChats,getMessages} from "../../services/GenerateContentService.js";
import messagesStore from "../../stores/MessagesStore.js"

// services

const UserMessages = observer(() => {

    const [users, setUsers] = React.useState(undefined)
    const [id,setId] =React.useState(undefined)
    const [messages, setMessages] = React.useState([])
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
                                <User key={user.id}  id={user.id} nickname={user.nickname} setMessages={setMessages} getMessages={getMessages}/>
                                <div key={uuidv4()} className={"separator"}></div>
                            </>
                        )
                    })
                }
            </article>
            <article className="blockMesseges">
                {messagesStore.Selected ?
                    messagesStore.loadState? <MessagesBlock yourId={id} sendMessage={sendMessage} messages={messages} setMessages={setMessages} nickname={messagesStore.name}/> : <div>Анимация загрузки</div>

                    :
                    <h1>Выберите диалог</h1>}
            </article>
        </div>

    );
})

export default UserMessages
