import React, {useEffect, useState} from "react"
import IncDenc from "./Components/IncAndDenc/IncDenc";
import User from "./Components/Crud/User";
import "./style/style.css"
import GetAPI from "./getAPI/GetAPI";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Game from "./navigationPage/Game";
import Navbar from "./Components/Navabr/Navbar";
import ApplePage from "./ApplePage/ApplePage";
import Error from "./getAPI/Error";
import RouterApp from "./Components/RouterApp/RouterApp";
import {AuthContext} from "./Context";


function App() {
    const [isAuth,setIsAuth]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem("auth")){
            setIsAuth(true)
        }
    },[])
  return (
      <AuthContext.Provider value={{isAuth,setIsAuth}}>
          <>
              {/*<IncDenc/>*/}
              {/*  <User/>*/}
              <BrowserRouter>
                  <Navbar/>
                  <RouterApp/>
              </BrowserRouter>
          </>
      </AuthContext.Provider>
  );
}

export default App;
