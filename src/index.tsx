import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import
  Admin from "./pages/Admin";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';
import './App.scss';
import './index.scss';
import Games from "./pages/Games";


export default function App() {
  const [user, setUser] = useState(null);
  function handleSignIn(user: any) {
      setUser(user);
  }

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="admin" element={<Admin onLogin={handleSignIn} />}/>
            <Route path="games" element={<Games />}/>
            <Route path="blog" element={<Blog />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
