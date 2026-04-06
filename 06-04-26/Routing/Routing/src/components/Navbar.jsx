import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
    </ul> */}
    <ul>
        <li><NavLink to="/" className={({isActive})=> isActive ? "active-link":""}
        >Home</NavLink></li>
        <li><NavLink to="/about"className={({isActive})=> isActive ? "active-link":""}
        >About</NavLink></li>
        <li><NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link":""}
        >Dashboard</NavLink></li>
    </ul>
    </>
  )
}

export default Navbar;