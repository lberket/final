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
import sportsman from "../images/sportsman.jpg"
import mobilebackground from "../images/bg2.jpg";
import React, { useEffect, useState, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from "./kontekst";
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import alen from "../images/alen.jpg";

function Home() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const tema = useContext(User);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <User.Provider value={tema}>

        <div className="beggining" style={{ position: 'relative' }}>
          <img src={isMobile ? mobilebackground : background} style={{ width: '100%' }} alt="" />


          <div className='headpage'>


            <h1 className='text-title'>

              Personalized sleep optimization using next-generation tools and artificial intelligence
            </h1>
            <p
              className="beggining-text"
              style={{ display: isSmall ? 'none' : 'block' }}
            >
              <Button style={{ marginTop: "20px" }} variant="outline-light" onClick={handleShow}>

                Read more
              </Button>
            </p>

          </div>




        </div>

        <Modal show={show} onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Personalized sleep optimization
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {tema == "individual" ? "In the fast-paced world of modern life, where individuals juggle multiple responsibilities and constantly seek to enhance their productivity and well-being, sleep emerges as a crucial factor in achieving optimal performance. During these rejuvenating hours, the body and mind engage in a remarkable restoration process, boosting cognitive function, emotional resilience, and physical vitality. Sleep serves as a master rejuvenator, sharpening focus, memory, and creativity, while promoting stress reduction and overall health. At SomnoTeam, we empower individuals to fully understand their sleep patterns and circadian rhythms, utilizing cutting-edge tools like pharmacogenomics and artificial intelligence to craft personalized sleep optimization strategies. Through these customized programs, individuals can unlock the transformative power of sleep, enabling them to thrive in all aspects of their lives." : "In the high-stakes arena of elite sports, where victory hinges on razor-thin margins, sleep emerges as a stealthy game-changer, propelling athletes towards peak performance and well-being. During these restorative hours, the body undergoes a remarkable transformation, bolstering cognitive and physical prowess while mitigating the risk of debilitating injuries. Sleep serves as a master honing tool, sharpening focus, reaction times, and decision-making, granting athletes the critical edge when it matters most. At SomnoTeam, we empower athletes to fully understand their sleep and circadian biology, leveraging cutting-edge tools like pharmacogenomics and artificial intelligence to craft personalized sleep optimization strategies."}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <div className='circles'>



          <div className='circle-row'>

            <div className="circle-container">
              <div className="circle">
                {tema == "athlete" ?
                  <span>
                    At least <a href="https://bjsm.bmj.com/content/55/7/356" style={{ fontWeight: "bold", color: "white" }}>1 in 2</a> athletes suffer from sleep disturbances
                  </span>
                  :
                  <span>
                    At least <a href="https://pubmed.ncbi.nlm.nih.gov/36346632/" style={{ fontWeight: "bold", color: "white" }}>1 in 3</a> adults suffer from sleep disturbances
                  </span>
                }





              </div>

            </div>
            <div className="circle-container">

              <div className="circle">
                {tema == "athlete" ?
                  <span><a href="https://pubmed.ncbi.nlm.nih.gov/34099605/" style={{ color: "white" }}>70% greater risk of injury  </a> when sleeping less than 7 hours</span>
                  :
                  <span>
                    Poor sleep is associated with
                    <a href="https://www.cdc.gov/sleep/about_sleep/chronic_disease.html"
                      style={{ fontWeight: "bold", color: "white" }}> depression, obesity, heart disease, stroke, diabetes...
                    </a>
                  </span>
                }



              </div>
            </div>
            <div className="circle-container">


              <div className="circle">

                {tema == "athlete" ?
                  <span>Short sleep decreases <a href="https://journals.lww.com/acsm-csmr/fulltext/2017/11000/sleep_and_athletic_performance.11.aspx" style={{ color: "white" }}>accuracy, reaction times, sprint performance & endurance</a></span>
                  :
                  <span>
                    Sleep loss leads <br /> to
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4610176/"
                      style={{ fontWeight: "bold", color: "white" }}>  decreased productivity, work errors and higher stress
                    </a>
                  </span>
                }




              </div> </div>

            <div className="circle-container">

              <div className="circle">

                {tema == "athlete" ?
                  <span>Experts recommend an <a href="https://bjsm.bmj.com/content/55/7/356" style={{ color: "white" }}>individualized approach</a> to optimize sleep</span>
                  :
                  <span>Experts recommend an <a href="https://www.mdpi.com/2673-947X/2/3/13" style={{ color: "white" }}>individualized approach</a> to optimize sleep</span>

                }





              </div>


            </div>
          </div>
        </div>






        {tema == "athlete" &&
          (
            <div className='large-div'>
              <hr />
              <Container>
                <Row>
                  <Col xs={4} md={4}>

                    <div className="circle2">
                      <img src={sportsman} alt="" className="person-image" /></div>

                  </Col>


                  <Col xs={8} md={8}>


                    <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ornare metus, vel euismod dolor. Sed bibendum urna non pulvinar laoreet. Nullam porta nibh nec leo luctus, eu imperdiet tortor condimentum. Proin non pharetra tortor. Duis tincidunt congue nunc, sit amet tempus est condimentum eget.</p>


                  </Col>
                </Row>
              </Container>
              <hr />
            </div>
          )
        }













        <br />

        {tema == "athlete" ?

          <div>
            <h3 className='m-title'>
              SomnoTeam: Next-Generation Personalized Sleep Optimization for Athletes and Teams
            </h3>
            <br />
            <Alert key={"light"} variant={"light"}>
              <p className='alert-text'>

                At SomnoTeam, we are driven by the belief that sleep is an untapped resource with the <b>power to transform</b> the <b>performance</b> and <b>well-being</b> of athletes. In the relentless pursuit of excellence, we provide you with unparalleled insights into the profound impact of sleep on your overall success. Our <b>next-generation approach</b> involves using next-generation tools such as pharmacogenomics and artificial intelligence to provide a <b>detailed understanding of sleep</b> and circadian biology and offer <b>personalized sleep optimization programs</b> tailored to the unique needs of elite athletes, sports teams, and individuals who demand the edge.

                We focus on several key areas that will take your understanding of your unique sleep pattern to the next level:
              </p>
            </Alert>
          </div>
          :
          <div>
            <h3 className='m-title'>

              SomnoTeam: Next-Generation Personalized Sleep Optimization
            </h3>
            <br />
            <Alert key={"light"} variant={"light"} >

              <p className='alert-text'>
                At SomnoTeam, we believe that sleep is an untapped resource with the power to <b>transform</b> your <b>success</b> and <b> well-being</b>. We're dedicated to providing you with unparalleled insights into the profound impact of sleep on your overall performance and vitality. Our <b>next-generation approach</b> utilizes cutting-edge tools like pharmacogenomics and artificial intelligence to deliver a comprehensive understanding of sleep and circadian biology. We craft <b>personalized sleep optimization programs</b> tailored to the unique needs of individuals who demand the edge.

                We focus on several key areas that will take your understanding of your unique sleep pattern to the next level:</p>
            </Alert>
          </div>

        }

        <br />

        <Accordion className='accord' style={{ marginTop: "-20px" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ padding: "8px", fontFamily: "DM Serif Display" }}><h5>Comprehensive Sleep Analysis with Personalized Sleep Recommendations</h5> </Accordion.Header>
            <Accordion.Body style={{ fontSize: "16.5px", textAlign: "left" }}>
              {tema == "athlete" ?
                <ul>
                  <li>
                    Using validated <b>wearable devices</b> that measure sleep quality, body temperature and oxygen saturation levels, we help you fully understand your sleep quality and sleep architecture. Data are analyzed by our <b>expert data scientists and physicians</b> with the help of <b>artificial intelligence</b>.
                  </li>
                  <li>
                    Why it's important: <b>Understanding</b> each athlete's sleep quality, as well as <b>identifying</b> and <b>addressing underlying sleep problems</b> can meaningfully improve an athlete's overall health and performance.
                  </li>
                </ul>
                :
                <ul>
                  <li>
                    Using validated <b>wearable devices</b> that measure sleep quality, body temperature and oxygen saturation levels, we help you fully understand your sleep quality and sleep architecture. Data are analyzed by our <b>expert data scientists and physicians</b> with the help of <b>artificial intelligence</b>.
                  </li>
                  <li>
                    Why it's important: Understanding your sleep quality, as well as identifying and addressing underlying sleep problems can meaningfully <b> improve your overall health, wellbeing and performance</b>.                  </li>
                </ul>
              }
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ padding: "8px", fontFamily: "DM Serif Display" }}><h5>Pharmacogenomics</h5></Accordion.Header>
            <Accordion.Body style={{ fontSize: "16.5px", textAlign: "left" }}>
              {tema == "athlete" ?
                <ul>
                  <li>
                    Using <b>next-generation tools</b>, we analyze each player's genetic makeup through a simple cheek swab to determine how they <b>metabolize sleep-modulating compounds</b> like melatonin and caffeine, as well as assess potential variations in receptors and enzymes involved in sleep homeostasis.                  </li>
                  <li>
                    Why it's important: Tailoring dosages and timing of sleep-regulating interventions (e.g. melatonin administration) based on an athlete's genetics can <b> optimize sleep interventions throughout the season</b> and <b>minimize the impact of travel fatigue and jet lag</b>.                  </li>
                </ul>
                :
                <ul>
                  <li>
                    Using <b>next-generation tools</b>, we analyze your genetic makeup through a simple cheek swab to determine how you <b>metabolize sleep-modulating compounds</b> like melatonin and caffeine, as well as assess potential variations in receptors and enzymes involved in sleep homeostasis.                  </li>
                  <li>
                    Why it's important: Tailoring dosages and timing of sleep-regulating interventions (e.g. melatonin administration) based on your genetics can <b>optimize your sleep</b>.
                  </li>
                </ul>
              }
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header style={{ padding: "8px", fontFamily: "DM Serif Display" }}><h5>Precision Sleep Profiling</h5></Accordion.Header>
            <Accordion.Body style={{ fontSize: "16.5px", textAlign: "left" }}>



              {tema == "athlete" ?
                <ul>
                  <li>
                    We analyze each player's sleep patterns to <b>identify their chronotype</b> i.e. their natural inclination to have peak cognitive abilities at specific times of the day, by measuring the body's natural melatonin cycle using simple non-invasive saliva samples.                  </li>
                  <li>
                    Why it's important: Understanding an athlete's chronotype allows them to <b>optimize training schedules, nutrition plans, and rest periods</b> to align with their peak energy and cognitive windows.                  </li>
                </ul>
                :

                <ul>
                  <li>
                    We analyze your sleep patterns to <b>identify your chronotype</b>, i.e. the natural inclination to have peak cognitive abilities at specific times of the day, by measuring the body's natural melatonin cycle using simple non-invasive saliva samples.                  </li>
                  <li>
                    Why it's important: Understanding your chronotype allows you to <b>optimize your daily schedule, aligning your activities with your peak energy and cognitive windows</b>.                  </li>
                </ul>

              }


            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header style={{ padding: "8px", fontFamily: "DM Serif Display" }}><h5>Circadian Rhythm Assessment</h5>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "16.5px", textAlign: "left" }}>



              {tema == "athlete" ?
                <ul>
                  <li>
                    We evaluate each player's circadian phase, which is the natural timing of their biological processes. By analyzing their core body temperature and melatonin levels throughout the night using non-invasive methods, we determine whether players have a <b>normal, advanced, or delayed sleep phase</b>.                  </li>
                  <li>
                    Why it's important: Knowing an athlete's circadian phase helps coaches and athletes <b>personalize training sessions, meal plans, pre-competition preparation, and jet lag mitigation strategies</b> (e.g. when to administer melatonin/caffeine/bright light therapy) to ensure peak performance.                   </li>
                </ul>
                :

                <ul>
                  <li>
                    We evaluate your circadian phase, which is the natural timing of your biological processes. By analyzing core body temperature and melatonin levels throughout the night using non-invasive methods, we determine whether you have a <b>normal, advanced, or delayed sleep phase.  </b>                </li>
                  <li>
                    Why it's important: Knowing your circadian phase helps you <b>personalize your daily routine, including meal timings, exercise schedules, and pre-sleep activities</b>, to ensure <b>optimal performance</b> and <b>well-being</b>.                  </li>
                </ul>

              }


            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <div style={{ marginTop: "-20px" }}>
          Want more information on the science behind next-generation sleep optimization? Learn more 
          <Link to={"articles"} >
            <a style={{ textDecoration: "underline", color: "#888888" }}> here.</a>
          </Link>


        </div>
        
<br />
        <h2 style={{ fontSize: "44px" }} className='m-title'>

          Ready to get started?
          <br></br>
        </h2>
        <br />
        <h2 style={{ fontSize: "30px", color: "#666677" }} className='m-title'>
          We offer three distinct packages to help you take your understanding of your sleep and circadian biology to the next level.


        </h2>
<br /><br />



        



        <Accordion className='accord2'>

          <Accordion.Item eventKey="0">
            <Accordion.Header className='acc-text'><h4><b style={{ color: "#aa0000" }}>{tema == "athlete" ? "Pro " : "Essential "}</b>($59/month)</h4></Accordion.Header>
            <Accordion.Body>

              <p style={{ textAlign: "left", marginLeft: "5px" }}>
                {tema == "athlete" ?
                  "                Elevate your athleticism and overall well-being with a personalized sleep analysis, expert recommendations, and comprehensive sleep education.      " :
                  "                Elevate your energy, productivity, and overall well-being with a personalized sleep analysis, expert recommendations, and comprehensive sleep education.  "}
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Includes:</b>

                <ul>

                  <li>                30-minute Interview with Our Experts to Understand Your Sleep, Lifestyle and Goals
                  </li>
                  <li>Comprehensive Sleep Analysis, Powered by Artificial Intelligence
                  </li>
                  <li>
                    Personalized Actionable Sleep Recommendations

                  </li><li>
                    Empowering Sleep Education</li>

                </ul>
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Best for:</b>

                {tema == "athlete" ?
                  <ul>

                    <li>
                      Everyday athletes seeking to maximize their performance and well-being through optimized sleep.
                    </li>
                    <li>
                      Athletes wanting to understand their sleep physiology or are experiencing sleep disturbances that hinder their training, recovery, and overall health.  </li>
                    <li>
                      Individuals seeking personalized sleep guidance and actionable strategies to improve their sleep habits and achieve their athletic goals.
                    </li>
                  </ul>
                  :
                  <ul>
                    <li>
                      Individuals seeking to improve their sleep quality, boost energy levels, and enhance their overall well-being.

                    </li>
                    <li>
                      Anyone experiencing sleep disturbances, difficulty falling asleep, or waking up feeling unrested.
                    </li>
                    <li>
                      Individuals seeking personalized sleep guidance and actionable strategies to improve their sleep habits and achieve their health and lifestyle goals.
                    </li>
                  </ul>
                }

              </p>

              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                Investment: $299
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Elevate your results with our ongoing monitoring and personalized support program for $59/month.</b>
              </p>
              <p style={{ marginLeft: "35px", marginBottom: "25px", fontWeight: "bold", color: "#999999", fontSize: "medium" }}>
                Not sure which package is the right one for you? Book a free 15-minute consultation with our team <a href="
                        https://koalendar.com/e/meeting-with-dr-alen-juginovic-koa1gBks" style={{ color: "#666666" }}>here</a> or contact us via e-mail.

              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className='acc-text'><h4><b style={{ color: "#aa0000" }}>Elite </b>  ($99/month)</h4></Accordion.Header>
            <Accordion.Body>




              <p style={{ textAlign: "left", marginLeft: "5px" }}>
                {tema == "athlete" ?
                  "Unlock your athletic potential and achieve peak performance with our personalized sleep optimization program, encompassing circadian rhythm assessment, precision sleep profiling, and personalized jet lag mitigation strategies."
                  :
                  "Unlock your full potential and experience exceptional well-being with a comprehensive sleep optimization program tailored to your unique needs and circadian rhythm."
                }

              </p>              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Includes:</b>
                <ul>

                  <li>
                    Everything from Pro Package
                  </li>
                  <li>
                    Personalized Circadian Rhythm Assessment
                  </li>
                  <li>
                    Precision Sleep Profiling


                  </li><li>
                    Personalized Jet Lag Mitigation and Sleep Strategies when Traveling
                  </li>

                </ul>
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Best for:</b>
                {tema=="athlete" ? 
                <ul>

                <li>
                  Elite athletes seeking to maximize their performance and well-being through optimized sleep, actionable understanding of their circadian clock and personalized sleep strategies.                  </li>
                <li>
                  Athletes training for major competitions who want to master their sleep physiology and optimize their training and performance cycles based on their unique circadian rhythm and chronotype.                  </li>                    <li>

                  Athletes who travel frequently and are ready to conquer travel fatigue and jet lag with personalized sleep strategies.
                </li>
              </ul>
              :
              <ul>
                <li>
                Individuals seeking to achieve peak performance in their personal, professional, or creative endeavors.
                </li>
                <li>
                High-achievers seeking to optimize their energy levels, focus, and cognitive function through personalized sleep strategies.
                </li>
                <li>
                Frequent travelers who want to minimize the impact of travel fatigue and jet lag on their sleep quality and overall well-being.
                </li>
              </ul>
              }
              </p>

              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                Investment: $699
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Elevate your results with our ongoing monitoring and personalized support program for $99/month.</b>
              </p>

              <p style={{ marginLeft: "35px", marginBottom: "25px", fontWeight: "bold", color: "#999999", fontSize: "medium" }}>
                Not sure which package is the right one for you? Book a free 15-minute consultation with our team <a href="
                        https://koalendar.com/e/meeting-with-dr-alen-juginovic-koa1gBks" style={{ color: "#666666" }}>here</a> or contact us via e-mail.

              </p>
            </Accordion.Body>
          </Accordion.Item>



          <Accordion.Item eventKey="2">
            <Accordion.Header className='acc-text'><h4><b style={{ color: "#aa0000" }}>Champion </b>($149/month)</h4></Accordion.Header>
            <Accordion.Body>
              <p style={{ textAlign: "left", marginLeft: "5px" }}>
                {tema=="athlete" ?
"Unleash your genetic potential and optimize your sleep for peak performance with our cutting-edge pharmacogenomics and sports performance data analysis."
:
"Unleash your true potential and experience unparalleled well-being with our groundbreaking sleep optimization program, combining cutting-edge genetic analysis, personalized sleep strategies, and deep insights into your unique biological makeup."  
              }
              </p>              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Includes:</b>
                <ul>

                  <li>
                    Everything from Elite Package
                  </li>
                  <li>
                    Next-Generation Pharmacogenomic Analysis
                  </li>
                  <li>
                    Genetic Testing for Sleep-Modulating Compounds

                  </li><li>
                    Personalized Sleep Recommendations Based on your Genes
                  </li>
                  <li>
                    Integration with {tema=="athlete" ? "Sports Performance Data to Understand the Impact of Sleep on Cognitive and Motor Performance" : " Lifestyle Data to Understand the Impact of Sleep on Your Daily Life"}
                  </li>

                </ul>
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Best for:</b>
                {tema=="athlete" ? 
                <ul>
                <li>
                  Athletes seeking a cutting-edge approach to sleep optimization that goes beyond traditional sleep hygiene recommendations and incorporates advanced pharmacogenomic analysis and integration with sports performance data.
                </li>
                <li>
                  Athletes poised for the pinnacle of sporting events, determined to harness the power of personalized sleep strategies aligned with their unique genetic makeup and circadian rhythm.
                </li>
                <li>
                  Athletes who are unwavering in their pursuit of peak performance, recognizing that sleep is the cornerstone of their athletic excellence.
                </li>
              </ul>
              :
              <ul>
                <li>
                Executives and entrepreneurs striving for peak cognitive function, unwavering focus, and enhanced decision-making capabilities, recognizing that sleep is the cornerstone of their success.
                </li>
                <li>
                  Individuals seeking a comprehensive and cutting-edge approach to sleep optimization, going beyond traditional sleep hygiene recommendations to harness the power of genetic insights.
                </li>
                <li>
                Individuals who value the intersection of cutting-edge science and personalized healthcare, recognizing that sleep optimization is a key investment in their overall well-being and success.
                </li>
              </ul>  
              }
              </p>

              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                Investment: $999
              </p>
              <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                <b>Elevate your results with our ongoing monitoring and personalized support program for $149/month.</b>
              </p>
              <p style={{ marginLeft: "35px", marginBottom: "25px", fontWeight: "bold", color: "#999999", fontSize: "medium" }}>
                Not sure which package is the right one for you? Book a free 15-minute consultation with our team <a href="
                        https://koalendar.com/e/meeting-with-dr-alen-juginovic-koa1gBks" style={{ color: "#666666" }}>here</a> or contact us via e-mail.

              </p>



            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


        <Link to={"services"} ><h5 style={{ textDecoration: "underline", color: "#666666", marginTop:"-15px" }}><a><b>See more</b></a></h5>
        </Link>


        <br /><br />



        <div>

          <h3 className='partnerships'>Partnerships</h3>

          <h5 className='partnerships2'>
            At SomnoTeam, we're proud to collaborate with a network of <b>world-renowned partners</b> and receive endorsements from notable figures in the world of <b>sports</b> and <b>health</b>. These partnerships and endorsements are a testament to the effectiveness of our sleep optimization programs and the trust we've earned within the industry. They include:
          </h5>


          <div className='club-center'>



            <div className='clubs-row'>

              <div className="clubs">
                <img src={real} alt="" className='club-img' />
                <br />
                <p style={{ marginBottom: "8px", fontSize: "x-large" }}>
                  Real Madrid C.F.
                </p>
                <p>
                  14-time Champions League Winner
                </p>

              </div>


              <div className="clubs">
                <img src={leipzig} alt="" className='club-img' />
                <br />
                <div style={{ marginLeft: "30px", marginRight: "30px" }}>


                  <p style={{ marginBottom: "8px", fontSize: "x-large" }}>
                    RB Leipzig
                  </p>
                  <p>
                    2-time German DFB-Pokal Winner
                  </p> </div>
              </div>

              <div className="clubs">
                <img src={partizan} alt="" className='club-img' />
                <br />
                <p style={{ marginBottom: "8px", fontSize: "x-large" }}>
                  National Basketball Association (NBA)
                </p>
                <p>The Premier Global Basketball League</p>
              </div>
            </div>
          </div>




          <div className='large-div'>

            <Container>
              <Row>
                <Col xs={4} md={4}>

                  <div className="circle2">
                    <img src={sportsman} alt="" className="person-image" /></div>
                  <h5 className='centriraj'>
                    Ime i titula
                  </h5>

                </Col>


                <Col xs={8} md={8}>


                  <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ornare metus, vel euismod dolor. Sed bibendum urna non pulvinar laoreet. Nullam porta nibh nec leo luctus, eu imperdiet tortor condimentum. Proin non pharetra tortor. Duis tincidunt congue nunc, sit amet tempus est condimentum eget.</p>


                </Col>
              </Row>
            </Container>

          </div>
        </div>

<br /><br />


<h2 className='au-title' style={{color:"#595959"}}>Our team:</h2>





<div className='club-center'>



<div className='clubs-row'>

<div className="clubs"  style={{marginBottom:"-90px"}}>

<br /><img src={alen} alt="" className='club-img' style={{maxWidth:"200px", maxHeight:"200px"}}/>
<p style={{marginBottom:"8px", fontSize:"x-large"}}>
  Alen Juginović, MD 
</p>
<p style={{color:"#555555"}}>
President of SomnoTeam
</p>
<p style={{fontSize:"14px", maxWidth:"225px", fontFamily:"PT Serif"}}>Postdoctoral Researcher in Sleep Neurobiology at Harvard Medical School, Boston, MA, USA
</p>

</div>




<div className="clubs">

<div style={{marginLeft:"30px", marginRight:"30px", marginBottom:"-90px"}}>

<br /><br /><br /><br />

<p style={{marginBottom:"8px", fontSize:"x-large"}}>
Miro Vuković, MD 
</p>
<p style={{maxWidth:"225px", color:"#555555"}}>
Vice-president and Chief Operating Officer at SomnoTeam
</p> 
<p style={{fontSize:"14px", maxWidth:"225px", fontFamily:"PT Serif"}}>
Research Fellow in Biostatistics at the University of Split School of Medicine, Split, Croatia
</p>
</div>
</div>





<div className="clubs" style={{marginBottom:"-80px"}}>
<br /><br /><br /><br />
<p style={{marginBottom:"8px", fontSize:"x-large"}}>
Ivan Aranza, MD 
</p>
<p style={{maxWidth:"225px", color:"#555555"}}>
  Chief Scientific Officer at SomnoTeam</p>
  <p style={{fontSize:"14px", maxWidth:"225px", fontFamily:"PT Serif"}}>
  Institute of Emergency Medicine, Split, Croatia
</p>
</div>
</div>
</div>

<br /><br />

<div className='club-center'>

<div className='clubs-row2'>


<div className="clubs">

<p style={{marginBottom:"8px", fontSize:"x-large"}}>
Mirko Armanda
</p>
<p style={{maxWidth:"225px",color:"#555555"}}>
Research Associate at SomnoTeam  </p>
<p style={{fontSize:"14px", maxWidth:"225px", fontFamily:"PT Serif"}}>

University of Split School of Medicine, Split, Croatia  </p>

</div>




<div className="clubs">


<div style={{marginLeft:"30px", marginRight:"30px"}}>


<p style={{marginBottom:"8px", fontSize:"x-large"}}>

Valentina Biloš

</p>
<p style={{maxWidth:"225px", color:"#555555"}}>
Data Scientist at SomnoTeam
</p> 
<p style={{fontSize:"14px", maxWidth:"225px", fontFamily:"PT Serif"}}>
University of Split School of Medicine, Split, Croatia
</p>
</div>
</div>
</div>

</div>



<Link to={"aboutus"} ><h5 style={{ textDecoration: "underline", color: "#666666" }}><a>Discover More About Us</a></h5>
        </Link>

        <br /><br />

        <Card
          bg="light"
          key="secondary"
          className="mb-m"
        >
          <Card.Body>
            <Card.Title>        <strong style={{ fontSize: "44px" }} className='a-title'>Our Research Initiatives and the Science of Sleep
            </strong></Card.Title>
            <Card.Text style={{ marginTop: "20px" }}>
              At SomnoTeam, we want to stay at the top of the sleep game at every step of the way. That is why we constantly seek to perform our own research in the unexplored regions of the field of sleep and sports in order to build an extensive pool of knowledge for everyone to learn from and benefit. We currently have several <b>international research projects</b> with leading teams across sports and the results will be available online as soon as they are analyzed and peer-reviewed in prominent scientific journals.
              Want to partner with us on a research initiative? <Link to={"contactus"} style={{ color: "#888888" }}><b>Contact us!</b></Link>
            </Card.Text>
          </Card.Body>
        </Card>

        <br />

        <Alert key={"light"} variant={"light"}>
          <p style={{ width: "80%", marginLeft: "10%" }}>
            Not only that, but we constantly search through the <b>latest scientific findings</b> in the world of sleep, sports and health to <u>implement the latest sleep knowledge in our personalized sleep programs</u> to benefit our partners and clients. Our team of experts regularly summarizes the latest research findings into <b> easy-to-read articles</b> that will equip you with the tools needed to better understand the profound effect of sleep on health and performance.
          </p>
        </Alert>

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

      </User.Provider>

    </>
  )
}

export default Home;