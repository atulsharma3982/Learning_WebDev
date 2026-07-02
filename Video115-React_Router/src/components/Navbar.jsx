import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>  Home</li></NavLink>
                    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"> <li> About</li></NavLink>
                    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/profile"> <li> Profile</li></NavLink>
                    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/user/:username"> <li> User</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
