import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import {Header} from "./components/Header";
import
    Admin from "./pages/Admin";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Photos from "./pages/Photos";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import './stylesheets/index.scss';
import Games from "./pages/Games";

export default function App() {
    const [user, setUser] = useState(null);

    function handleSignIn(user: any) {
        setUser(user);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={
                        <>
                            <Header text="Under Construction"/>
                            <Home/>
                        </>
                    }/>
                    <Route path="admin" element={
                        <>
                            <Header text="Admin Panel"/>
                            <Admin onLogin={handleSignIn}/>
                        </>
                    }/>
                    <Route path="about" element={
                        <>
                            <Header text="About Me"/>
                            <About/>
                        </>
                    }/>
                    <Route path="music" element={
                        <>
                            <Header text="Music"/>
                            <Music/>
                        </>
                    }/>
                    <Route path="photos" element={
                        <>
                            <Header text="Photos"/>
                            <Photos/>
                        </>
                    }/>
                    <Route path="games" element={
                        <>
                            <Header text="Games"/>
                            <Games/>
                        </>
                    }/>
                    <Route path="blog" element={
                        <>
                            <Header text="Blog Articles"/>
                            <Blog/>
                        </>
                    }/>
                    <Route path="*" element={
                        <>
                            <Header text="404"/>
                            <NoPage/>
                        </>
                    }/>
                </Route>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App/>
);
