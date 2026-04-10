import React from 'react'
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Params from './components/Params';
import Courses from './components/Courses';
import MockTests from './components/MockTests';
import Reports from './components/Reports';
import NotFound from './components/NotFound'


// const router = createBrowserRouter([
//   {path:"/", element:<Home />},
//   {path:"/about", element:<About />},
//   {path:"/dashboard", element:<Dashboard />}])
const router = createBrowserRouter([
  {path:"/", element:
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {path:"/about", element:
  <div>
      <Navbar />
      <About />
    </div>},
  {path:"/dashboard", 
  element:<div>
      <Navbar />
      <Dashboard />
    </div>,
  children:[ {path:"courses",
    element:<Courses />  },
    {path:"mock-tests",
    element: <MockTests />},
    {path:"reports",
    element: <Reports />} 
  ]
},
   {path:"/student/:id", element:<div>
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

