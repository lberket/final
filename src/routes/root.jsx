import { Outlet, Link } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import './App.css';
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Events from "./Components/Events";
import Search from "./Components/Search";
import { useState, useEffect, useRef } from 'react';
import A1 from "./Components/Articles/A1";
import A2 from "./Components/Articles/A2";
import A3 from "./Components/Articles/A3";
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToTop from "./Components/ScrollToTop";

export default function Root() {
    
  const [tema, postaviTemu] = useState("User");
  const [searchFor, setSearchFor] = useState("");
  const [show, setShow] = useState(false);

  const handleSearch = (search) => {
    setSearchFor(search);
    setShow(true);
  }; 
  
    return (
      <>
            <ScrollToTop />

      <Navbar onSearch={handleSearch} />
{/* 
          <nav>
            <ul>
              <li>
              <Link to={`articles`}>Your Name</Link>
              </li>
              <li>
              <Link to={`home`}>Your Friend</Link>
              </li>
            </ul>
          </nav> */}

        <div id="detail">
            <Outlet />
        </div>
        <Footer />
      </>
    );
  }