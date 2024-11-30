import React from 'react'
import "./Navbar.scss"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (<nav className='navbar'>
        <NavLink to="/">
            <div className='navbar_logo'>
                <img src="src\assets\images\logoKasa.png" alt="Logo Kasa" />
            </div>
        </NavLink>
        <NavLink to="/">
            Accueil
        </NavLink>
        <NavLink to="/about">
            A propos
        </NavLink>

    </nav>
    );
}

export default Navbar;
