import React from "react";
import {Navigate,Route,Routes} from "react-router"
import MainLayout from "./layout/MainLayout"

function App(){
  return(
    <div>
      <Routes>


        <Route element={<MainLayout/>}>

        <Route path='/' element={<Navigate to={"/dashboard"} replace/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        
        </Route>
      </Routes>
    </div>
  )
}