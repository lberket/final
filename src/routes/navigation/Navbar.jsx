import logo from "../images/logo.png";
import './Navbar.css';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Navbar = ({ onSearch }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
      };
  
      handleResize(); // Check initial screen width
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const [showNavbar, setShowNavbar] = useState(false)

    
    
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const articles = [
    "Back to school - later? Sleep, school start times and academic performance",
    "Short sleep a day keeps your memories far away",
    "Can regular exercise help you sleep better?"
  ]
  let a = [];
  let l = [];

  const [show, setShow] = useState(false);
  const [showR, setShowR] = useState(false);

  const [selected, setSelected] = useState([]);
  const [links, setLinks] = useState([]);


  const [search, setSearch] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const handleSearch = () => {
    a = [];
    l = [];

    onSearch(search);
    setShow(false);


    for (let i = 0; i < articles.length; i++) {
      if ((articles[i].toLowerCase()).includes(search.toLowerCase())) {
        a.push(articles[i])
        l.push(`article${i + 1}`)
      }
    }

    setSelected(a);
    setLinks(l);


    setShowR(true);


  };

  const handleChange = (e) => setSearch(e.target.value);


  const buttonStyle = {
    border: "none",
    backgroundColor: "rgba(230, 230, 250, 0)",
    marginTop: "2px"
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
     <a className="navbar-brand">
        <img src={logo} alt="" className="logo" />
      </a>


      <div className="menu-icon"  style={{ display: isMobile ? '' : 'none' , position:"absolute", right:"8%"}}  onClick={handleShowNavbar}>
          
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="24"
          viewBox="0 0 52 24"
        >
          <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 47)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 67)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="52"
              height="4"
              rx="2"
              transform="translate(294 57)"
              fill="#574c4c"
            />
          </g>
        </svg>
        </div>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">



<ul className="navbar-nav" style={{ display: isMobile ? 'none' : '' }}>
          <li className="nav-item active">
          <Link className="nav-link" to={`/`}>Home</Link>
          </li>



          <li className="nav-item">
            <Link className="nav-link" to={'articles'}>
              Articles
            </Link>
          </li>
        </ul>

        <ul className="right-nav navbar-nav" style={{ display: isMobile ? 'none' : '' }}>

          <li className="nav-item">
            <Button className="subscribe" variant="outline-danger" style={{ fontWeight: "bold"}} href="https://gmail.us5.list-manage.com/subscribe?u=53a55e95c2046d2c099fcc543&id=4a6cdbd34c">Subscribe</Button>
          </li>

          <li className="nav-item">
            <Button style={{ backgroundColor: "rgba(0,0,0,0)", color: "black", border: "none" }} onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></Button>
          </li>

        </ul>














        
        <div className={`nav-elements  ${showNavbar && "active"}`}>

<ul>
<li className="nav-item active">
          <Link className="nav-link" to={`/`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'articles'}>
              Articles
            </Link>
          </li>


          <li className="nav-item">
            <Button className="subscribe" variant="outline-danger" style={{ fontWeight: "bold"}} href="https://gmail.us5.list-manage.com/subscribe?u=53a55e95c2046d2c099fcc543&id=4a6cdbd34c">Subscribe</Button>
          </li>

          <li className="nav-item">
            <Button style={{ backgroundColor: "rgba(0,0,0,0)", color: "black", border: "none" }} onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></Button>
          </li>

</ul>

        </div>


















        <Modal show={show} onHide={handleClose} style={{ top: "20%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Search for articles</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Group className="mb-3" controlId="formBasicEmail" style={{ flexGrow: 1 }}>
                <Form.Control type="search" onChange={handleChange} />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                style={{ backgroundColor: 'rgba(0,0,0,0)', color: 'black', border: 'none', marginTop: "-1rem" }}
                onClick={handleSearch}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>








        <Modal show={showR} onHide={handleCloseR} style={{ top: "20%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Search result</Modal.Title>
          </Modal.Header>
          <Modal.Body>

 {selected.length > 0 ? (
      selected.map((element, index) => (
        <React.Fragment key={index}>
          <Link to={`articles/${links[index]}`} className="aaa">{element}</Link>
          <hr />
        </React.Fragment>
      ))
    ) : (
      <h6 style={{color:"gray"}}>No results</h6>
    )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseR}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>









      </div>
    </nav>
  );
};
export default Navbar;