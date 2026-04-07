import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    <ul className="navbar">
        <h1>UserHub</h1>
        <div className='links'>
        <li><NavLink to="/register" className={({isActive})=> isActive ? "active-link":""}
        >Register</NavLink></li>
        <li><NavLink to="/users"className={({isActive})=> isActive ? "active-link":""}
        >Users</NavLink></li>
        </div>
    </ul>
    </>
  )
}

export default Navbar;