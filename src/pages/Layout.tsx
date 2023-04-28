import {Outlet, Link} from "react-router-dom";
import logo from '../assets/banner.webp';
import React from "react";

const Layout = () => {
    return(
        <div className="App">
            <header className="App-header">
                <Link to="/" className="app_link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
            
            <nav>
                <ul>
                    <li className="button">
                        <Link to="/games">Games</Link>
                    </li>
                    <li className="button">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="button">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="button">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;