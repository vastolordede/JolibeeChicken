import React from "react";
import { Link } from 'react-router-dom';
import img from '../img/logo.png';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
            <div className="container">
                <Link className="font nav-nounderline" to="/"><img src={img} className="logo" alt="logo"></img></Link>
                <ul className="nav navbar-nav d-flex flex-row flex-item w-100">
                    <li className="nav-item">
                        <Link className="font nav-nounderline" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="font nav-nounderline" to="/Menu-combo">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="font nav-nounderline" to="/location">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="font nav-nounderline" to="/promotion">promotion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="font nav-nounderline" to="/About">About Jolibee</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
