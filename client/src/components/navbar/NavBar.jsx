import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css';

import uwu from './resource/( ˶^▾^˶ ).svg'
import friends from './resource/myFriends.svg'
import news from './resource/News.svg'
import sendMessege from './resource/sendMessege.svg'
import myProfile from './resource/myProfile.svg'
import myGroups from './resource/myGroups.svg'
export const Navigation = () => {

    return(<header className={"header"}>
            <div className={"outList"}>
                <div className={"inList"}>
                    <Link to={"/"} className={"listButton navig fix-uwu"}><img alt={""} src={uwu}/></Link>
                    <Link to={"/profile"} className={"listButton navig"}><img alt={""} src={myProfile}/></Link>
                    <Link to={"/news"} className={"listButton navig"}><img alt={""} src={news}/></Link>
                    <Link to={"/messages"} className={"listButton navig"}><img alt={""} src={sendMessege}/></Link>
                    <Link to={"/friends"} className={"listButton navig"}><img alt={""} src={friends}/></Link>
                    <Link to={"/groups"} className={"listButton navig"}><img alt={""} src={myGroups}/></Link>
                </div>
            </div>

           </header>
    );

}