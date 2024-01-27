import React from "react";
import {Route,Routes, Navigate, BrowserRouter} from 'react-router-dom'
import NavBar from "./pages/navbar.jsx"

import SignUpIn from "./pages/sign-up-in.jsx";

import Profile from "./pages/profile.jsx";
import News from "./pages/news.jsx";
import Messages from "./pages/messages.jsx";
import Groups from "./pages/groups.jsx"
import Friends from "./pages/friends.jsx";
function Router(){

  if (false)
  {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"/messages"} element={<Messages/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/news"} element={<News/>}/>
                <Route path={"/friends"} element={<Friends/>}/>
                <Route path={"/groups"} element={<Groups/>}/>
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    )
  }else{
      return (
          <BrowserRouter>
            <Routes>
                <Route path={"/sign"} element={<SignUpIn/>}/>
                <Route path={"*"} element={<Navigate to={"/sign"}/>} />
            </Routes>
          </BrowserRouter>
      )
  }



}
export default Router;