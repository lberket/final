import logo from "../images/logo.png";
import './Navbar.css';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Outlet, Link } from "react-router-dom";
import User from "../Components/kontekst";
import { useContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Navbar = ({ onSearch , changeTheme}) => {

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



    const [tema] = useContext(User)

    function promjenaTeme(){
        postaviTemu(tema == "a" ? "athlete" : "individual")
      }

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    };

    const articles = [
        "Back to school - later? Sleep, school start times and academic performance",
        "Short sleep a day keeps your memories far away",
        "Can regular exercise help you sleep better?",
        "The Science Behind Sleepwalking: A Journey into the Night",
        "Sleeping for Two: How a Good Night's Sleep Shapes a Healthy Pregnancy",
        "Sleeping on the International Space Station: The Unknown Frontier of Sleep in Space",
        "History of Sleep: The Transformation of Sleep Practices from Ancient Egypt to Today",
        "Rest and Digest: The Unexpected Link between Sleep and the Gut"
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








            <div className="el-right">



                
        <User.Provider value={[tema, promjenaTeme]}>
        {!isMobile && (<ButtonGroup aria-label="Basic example" style={{marginTop:"3%"}}>

            <Button variant={tema=="i" ? "secondary" : "outline-secondary"} size="sm" onClick={tema=="a" ? changeTheme : ()=>{}} style={{maxHeight:"30px"}}>Individual</Button>
            <Button variant={tema=="a" ? "secondary" : "outline-secondary"} size="sm" onClick={tema=="i" ? changeTheme : ()=>{}} style={{maxHeight:"30px", marginRight:"10px"}}>Athlete</Button>

            </ButtonGroup>
            )}

        </User.Provider>


            <div className="menu-icon" onClick={handleShowNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 128 128">
                    <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#607D8B" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
                </svg> */}

            </div>
            <div className="nav-item">
                <Button style={{ backgroundColor: "rgba(0,0,0,0)", color: "black", border: "none" }} onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></Button>
            </div>

            </div>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">


                <div className={`nav-elements ${showNavbar && "active"}`}>



                    <ul className="space-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`/`} onClick={handleShowNavbar}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={'aboutus'}  onClick={handleShowNavbar}>
                                About Us
                            </Link>
                        </li>

{/* '
                        <li className="nav-item">
                            <Link className="nav-link" to={'whysleepmatters'}  onClick={handleShowNavbar}>
                                Why Sleep Matters
                            </Link>
                        </li>' */}

                        <li className="nav-item">
                            <Link className="nav-link" to={'services'}  onClick={handleShowNavbar}>
                                Our Services 
                            </Link>
                        </li>
{/* 
                        <li className="nav-item">
                            <Link className="nav-link" to={'successstories'}  onClick={handleShowNavbar}>
                                Success Stories
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to={'articles'}  onClick={handleShowNavbar}>
                                Sleep Research & Insights
                            </Link>
                        </li>
{/* 
                        <li className="nav-item">
                            <Link className="nav-link" to={'clientportal'}  onClick={handleShowNavbar}>
                                Client Portal
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to={'contactus'}  onClick={handleShowNavbar}>
                                Contact Us
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Button className="subscribe" variant="outline-danger" style={{ fontWeight: "bold" }} href="https://gmail.us5.list-manage.com/subscribe?u=53a55e95c2046d2c099fcc543&id=4a6cdbd34c">Subscribe</Button>
                        </li>


                        <li className="nav-item">

                        <User.Provider value={[tema, promjenaTeme]}>
        {isMobile && (<Button variant="secondary" size="sm" onClick={changeTheme} style={{maxHeight:"30px"}}>{tema=="a" ? "Athlete" : "Individual"}</Button>

            )}

        </User.Provider>
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
                                    <Link to={`articles/${links[index]}`} className="aaa" onClick={handleCloseR}>{element}</Link>
                                    <hr />
                                </React.Fragment>
                            ))
                        ) : (
                            <h6 style={{ color: "gray" }}>No results</h6>
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