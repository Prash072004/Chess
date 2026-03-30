import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/*<img src={logo} alt="Chess Logo" className="nav-logo" />*/}
            <div className="nav-logo">CHESS</div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Play</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Leaderboard</a></li>
            </ul>

            <div className="nav-btn">
                <button className="nav-btn-login">Login</button>
                <button className="nav-btn-sign-up">Sign up</button>
            </div>
            
        </nav>
    );
};

export default Navbar;