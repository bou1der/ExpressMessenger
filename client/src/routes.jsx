import React,{useEffect} from "react";
import {Route,Routes, Navigate, BrowserRouter} from 'react-router-dom'


import SignUpIn from "./pages/sign-up-in.jsx";
import Profile from "./pages/profile.jsx";
import News from "./pages/news.jsx";
// import Messages from "./pages/messages.jsx";
import Messages from './components/messeges/messegesPage.jsx'
import Groups from "./pages/groups.jsx"
import Friends from "./pages/friends.jsx";
import IndexPage from "./pages/index.jsx";
import NavBar from "./pages/navbar.jsx"
import loadingGif from "./components/sign-up-in/resource/loading.gif"

import {refresh}  from "./services/authService.js"
import routerStore from "./stores/store.js"
import {observer} from "mobx-react-lite";


const checkUserValidation = async () => {
    try {
        await refresh()
        if (localStorage.getItem('token')){
            routerStore.setAuht(true)
        }else {
            routerStore.setAuht(false)
        }
    } catch (error) {
        console.log('Ошибка проверки пользователя:', error);
    }
};


const Router = observer(() => {


    if (routerStore.state) {
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
  }else if(routerStore.state === null){
        return (<img alt={""} src={loadingGif} onLoad={() => {checkUserValidation()}}/>)
    }
    else{
      return (
          <BrowserRouter>
            <Routes>
                <Route path={"/sign"} element={<SignUpIn/>}/>
                <Route path={"*"} element={<Navigate to={"/sign"}/>} />
            </Routes>
          </BrowserRouter>
      )
  }
})
export default Router;