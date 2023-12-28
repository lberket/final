import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import sleep from "../images/a2.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import exercise from "../images/a3.jpg";
import school from "../images/a1.jpg";
import real from "../images/real.png";
import partizan from "../images/partizan.png";
import leipzig from "../images/leipzig.png";
import background from "../images/bg.jpg";
import mobilebackground from "../images/bg2.jpg";

import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setIsSmall(window.innerWidth <= 680);

    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>



      {/* 
<div className="beggining" style={{ position: 'relative' }}>
  <img src={background} style={{ width: '100%' }} alt="" />
  <h1
    className='text-title'
  >
    Sleep: the body's <br />
    rest cycle
  </h1>
  <p className="beggining-text">
  Sleep is increasingly recognized as the main pillar of <strong>mental and physical health</strong>. Optimal sleep is essential for <u>cognitive and motor performance, mood, immunity, metabolism and many other important processes</u>.
  </p>
</div> */}

      <div className="beggining" style={{ position: 'relative' }}>
        <img src={isMobile ? mobilebackground : background} style={{ width: '100%' }} alt="" />


        <div className='headpage'>


          <h1 className='text-title'>
            Sleep: the body's <br />
            rest cycle
          </h1>
          <p
            className="beggining-text"
            style={{ display: isSmall ? 'none' : 'block' }}
          >
            Sleep is increasingly recognized as the main pillar of <strong>mental and physical health</strong>. Optimal sleep is essential for <u>cognitive and motor performance, mood, immunity, metabolism, and many other important processes</u>.
            <br /><Link to={"articles"}>
              <Button style={{ marginTop: "20px" }} variant="outline-light">

                Read more
              </Button></Link>
          </p>

        </div>




      </div>




      <div className='circles'>



        <div className='circle-row'>

          <div className="circle-container">
            <div className="circle">
              <span>7-9 hours of sleep a day</span>
            </div>

          </div>
          <div className="circle-container">

            <div className="circle">
              <span>1/3 of the population has sleep problems</span>
            </div>
          </div>
          <div className="circle-container">

            <div className="circle">
              <span>15% of people sleepwalk</span>
            </div>
          </div>
        </div>
      </div>


      <hr />


      <h3 className='partnerships'>We are proud of every one of our partnerships with leading sports teams around the world: </h3>



      <div className='club-center'>



        <div className='clubs-row'>

          <div className="clubs">
            <img src={real} alt="" className='club-img' />
            <br />
            <p style={{marginBottom:"8px", fontSize:"x-large"}}>
              Real Madrid C.F.
            </p>
            <p>
            14-time Champions League Winner
            </p>

          </div>


          <div className="clubs">
            <img src={leipzig} alt="" className='club-img' />
            <br />
            <div style={{marginLeft:"30px", marginRight:"30px"}}>

           
            <p style={{marginBottom:"8px", fontSize:"x-large"}}>
            RB Leipzig
            </p>
            <p>
            2-time German DFB-Pokal Winner
            </p> </div>
          </div>

          <div className="clubs">
            <img src={partizan} alt="" className='club-img' />
            <br />
            <p style={{marginBottom:"8px", fontSize:"x-large"}}>
            FK Partizan
            </p>
            <p>27-time Serbian SuperLiga Winner</p>
          </div>
        </div>
      </div>



      <hr></hr><br />

      <strong style={{ fontSize: "44px" }} className='a-title'>Articles</strong>
      <br /><br />
      <div className="card-container" >


        <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
          <Link to={"articles/article1"}>   <Card.Img variant="top" src={school} />
          </Link>
          <Card.Body>
            <Card.Title style={{ textAlign: "left" }}>
              <Link to={"articles/article1"} className='aaa'>         Back to school - later? Sleep, school start times and academic performance
              </Link>
            </Card.Title>
            <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
              We all know good sleep is one of the main pillars of mental and physical health. Therefore, it is alarming to hear that...
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Link to={"articles/article1"} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                <Button style={{ marginTop: "0.5rem" }} variant="outline-dark">
                  Read me
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>




        <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
          <Link to={"articles/article2"}> <Card.Img variant="top" src={sleep} />
          </Link>
          <Card.Body>
            <Card.Title style={{ textAlign: "left" }}>
              <Link to={"articles/article2"} className='aaa'>   Short sleep a day keeps your memories far away
              </Link> </Card.Title>
            <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
              We’ve all experienced short-term complete or partial lack of sleep in our lives. The next day we don’t feel great. In fact...

            </Card.Text>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Link to={"articles/article2"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button style={{ marginTop: "0.5rem" }} variant="outline-dark">
                  Read me</Button>
              </Link>

            </div>
          </Card.Body>
        </Card>




        <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
          <Link to={"articles/article3"} style={{ color: 'inherit', textDecoration: 'inherit' }}>      <Card.Img variant="top" src={exercise} />
          </Link>
          <Card.Body>
            <Card.Title style={{ textAlign: "left" }}>
              <Link to={"articles/article3"} className='aaa'>  Can regular exercise help you sleep better?
              </Link> </Card.Title>
            <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
              Regular exercise is one of the cheapest and most efficient ways to preserve good health. Similar can be said about sleep... </Card.Text>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Link to={"articles/article3"} style={{ color: 'inherit', textDecoration: 'inherit' }}>

                <Button style={{ marginTop: "0.5rem" }} variant="outline-dark">
                  Read me
                </Button>
              </Link>
            </div>      </Card.Body>
        </Card>


      </div>


      <Link to={"articles"} ><h5 style={{ textDecoration: "underline", color: "#666666" }}><a>See more</a></h5>
      </Link>












      <br />
      <br />






















    </>
  )
}

export default Home;