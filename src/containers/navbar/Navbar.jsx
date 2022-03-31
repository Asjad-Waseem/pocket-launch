import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar__container">
                    <img src={logo} alt="logo"/>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/List"><p>Rockets</p></Link>
                    <Link to="/Launch"><p>First Stage</p></Link>
                    <Link to="/About"><p>About us</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
