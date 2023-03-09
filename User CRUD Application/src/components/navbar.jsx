import React from "react";
import {NavLink} from 'react-router-dom'
import './navbar.css'
function Navbar () {
    return(
        <div className="ParentDiv">
            <div>
                <h2>User Database</h2>
            </div>
            <div>
                <NavLink className="user" to={'/user'}>Users List </NavLink>
                <NavLink className="help" to={'/help/'}>Help</NavLink>
                <NavLink className="contact" to={'/contact/'}>Contact</NavLink>
            </div>
        </div>
    )
}
export default Navbar;