import React from "react";
import {Route,Routes, Navigate, BrowserRouter} from 'react-router-dom'


import SignUpIn from "./pages/sign-up-in.jsx";
import Profile from "./pages/profile.jsx";
import News from "./pages/news.jsx";
import Messages from "./pages/messages.jsx";
import Groups from "./pages/groups.jsx"
import Friends from "./pages/friends.jsx";
import IndexPage from "./pages/index.jsx";
import NavBar from "./pages/navbar.jsx"

import api from "./http/serviceAxios.js";
import {checkAuth}  from "./services/authService.js"

const {useState,useEffect} = React

function Router() {
    const [isUserValidated, setUserValidated] = useState(false);

    useEffect(() => {
        const checkUserValidation = async () => {
            try {
               await checkAuth()
                if (localStorage.getItem('token')){
                    setUserValidated(true)
                }
            } catch (error) {
                console.log('Ошибка проверки пользователя:', error);
            }
        };
        checkUserValidation();
    }, []);

    if (isUserValidated) {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"/messages"} element={<Messages/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/news"} element={<News/>}/>
                <Route path={"/friends"} element={<Friends/>}/>
                <Route path={"/groups"} element={<Groups/>}/>
                <Route path={"/"} element={<IndexPage/>}/>
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