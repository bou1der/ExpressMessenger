import React from "react";
import {Route,Routes, Navigate} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/navbar/NavBar.jsx";

import Messages from "./pages/messages.jsx";
import SignUpIn from "./pages/sign-up-in.jsx";
import Profile from "./pages/profile.jsx";
import News from "./pages/news.jsx";


function Router(){
  if (false)
  {
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/messages"} element={<Messages/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/news"} element={<News/>}/>
                {/*<Redirect to={"/profile"}/>*/}
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
                {/*<Redirect to={"/sign"}/>*/}
            </Routes>
          </BrowserRouter>
      )
  }



}
export default Router;