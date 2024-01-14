import React from "react";
import {Route,Routes} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/navbar/NavBar.jsx";

import Messages from "./pages/messages.jsx";
import SignUpIn from "./pages/sign-up-in.jsx";
import Profile from "./pages/profile.jsx";
import News from "./pages/news.jsx";


function Router(){
  if (true)
  {
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={"/messages"} element={<Messages/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/news"} element={<News/>}/>
            </Routes>
        </BrowserRouter>
    )
  }else{
      return (
          <BrowserRouter>
            <Routes>
                <Route path={"/sign"} element={<SignUpIn/>}/>
            </Routes>
          </BrowserRouter>
      )
  }



}
export default Router;