import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
    return (
        <ul>
            <li>
                <NavLink to="/" className={({isActive})=>{return isActive ? "active-link" : ""}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>{ return isActive ? "active-link" : ""}}>
                    About us
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=>{return isActive ? "active-link" : ""}}>
                    Dashboard
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar
