import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Routes from './routes.jsx'
import {Navigation} from "./components/navbar/NavBar.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

        <Routes/>
  </React.StrictMode>,
)
