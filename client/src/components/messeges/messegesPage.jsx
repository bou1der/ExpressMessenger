import React from "react";
import User from './userInMessageList.jsx'
import SendMessageButtonSrc from  './resource/send_messege.svg'
import SendFilesButtonSrc from './resource/send_files.svg'
import DialogInfo from "./dialogInfo.jsx";


function UserMessages({}) {

    return(
        <div className="content">
            <article className="userMesseges">
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}
                <div className="separator"/>
                {<User></User>}

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
                <div className="inputMessenge"><textarea placeholder="Write a messege......"></textarea></div>
                <button><img src={SendMessageButtonSrc} alt=""/></button>
            </span>
            </article>
        </div>
    );
}

export default UserMessages
