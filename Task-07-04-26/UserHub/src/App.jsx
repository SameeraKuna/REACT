import React from 'react'
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar';
import Users from './components/Users';
import Register from './components/Register';
import Params from './components/Params';
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {path:"/register", element:
    <div>
      <Navbar />
      <Register />
    </div>
  },
  {path:"/users", element:
  <div>
      <Navbar />
      <Users />
    </div>},
   {path:"/users/:userId", element:<div>
      <Navbar />
      <Params />
    </div>} ,
  {path: "*", element: <NotFound />
  }
  ])

export default function App (){
  
  return (
    <>
    <RouterProvider router = {router} />
    
    </>
  )
}

