import {Outlet, Link, useLocation} from "react-router-dom";
import logo from '../assets/banner.webp';
import React, {useEffect} from "react";

function capitalizeAfterSlash(str: string): string {
    if (str.charAt(0) === '/') {
        str = str.substring(1);
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTitle(pathname: string) : string {
    if (pathname === "/") {
        return ("uptu");
    } else {
        return(`uptu | ${capitalizeAfterSlash(pathname)}`);
    }
}

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = getTitle(location.pathname);
    }, [location]);

    return (
        <div className="App">
            <header className="logo-container">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>

            <nav>
                <ul>
                    <li className="button">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="button">
                        <Link to="/music">Music</Link>
                    </li>
                    <li className="button">
                        <Link to="/games">Games</Link>
                    </li>
                    <li className="button">
                        <Link to="/photos">Photos</Link>
                    </li>
                    <li className="button">
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
};

export default Layout;
