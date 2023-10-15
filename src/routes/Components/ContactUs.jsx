import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function ContactUs() {
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const [show4, setshow4] = useState(false);
    const [show5, setshow5] = useState(false);
    const [show6, setshow6] = useState(false);


    const showme1 = () => {
        setshow1(true);
    }
    const hideme1 = () => {
        setshow1(false);
    }
    const showme2 = () => {
        setshow2(true);
    }
    const hideme2 = () => {
        setshow2(false);
    }
    const showme3 = () => {
        setshow3(true);
    }
    const hideme3 = () => {
        setshow3(false);
    }
    const showme4 = () => {
        setshow4(true);
    }
    const hideme4 = () => {
        setshow4(false);
    }
    const showme5 = () => {
        setshow5(true);
    }
    const hideme5 = () => {
        setshow5(false);
    }
    const showme6 = () => {
        setshow6(true);
    }
    const hideme6 = () => {
        setshow6(false);
    }



    return (
        <>
            <br /><br />              <br /><br />
          <br />


            <h1 style={{maxWidth:"80%", marginLeft:"10%"}} className='contact-title'>Contact Us: Let's Connect and Elevate Your Sleep and Performance</h1>
            <br /><br />


            <div style={{ width: "80%", marginLeft: "10%" }} className='contactt'>




                <div className="card-container" >


                    <div>
                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme1} className={`card-container1 ${show1 ? "card-hidden" : ""}`}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted"><svg style={{ maxWidth: "35px", marginBottom: "5px" }} class="w-1 h-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg></Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>General Inquiries</Card.Title>
                                <Card.Text style={{ color: "gray" }}>Have questions about our services, pricing, or how...
                                </Card.Text>
                                <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show1 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme1}>
                            <Card.Text style={{fontSize:"large"}}>
                                Have questions about our services, pricing, or how personalized sleep consultations can benefit you or your team? Our dedicated team is ready to provide comprehensive information and assist you in making informed decisions.                        </Card.Text>
                        </Card>
                    </div>








                    <div>

                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme2} className={`card-container1 ${show2 ? "card-hidden" : ""}`}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                
  <svg style={{ maxWidth: "35px", marginBottom: "5px" }} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg></Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Collaborations & Partnerships</Card.Title>
                                <Card.Text style={{ color: "gray" }}>
                                    Are you a sports organisation, club, or federation interested in...
                                </Card.Text> <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show2 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme2}>
                            <Card.Text style={{fontSize:"large"}}>
                            Are you a sports organization, club, or federation interested in partnering with us to enhance the sleep quality and performance of your athletes? Let's discuss how SomnoTeam's expertise and innovative approach can contribute to your team's success.                      
                                 </Card.Text>
                        </Card>
                    </div>



                    <div>

                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme3} className={`card-container1 ${show3 ? "card-hidden" : ""}`}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" style={{ maxWidth: "35px", marginBottom: "5px" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M9.338 12.276a1.614 1.614 0 1 0 0-3.228 1.614 1.614 0 0 0 0 3.228Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.111 17.889 6.086-6.086m2.663-7.228 4.565 4.565-2.283 6.086L2.461 19 1 17.539 4.774 6.858l6.086-2.283Zm5.205 5.203-5.843-5.842L13.158 1 19 6.843l-2.935 2.935Zm-5.113.884a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0Z"/>
  </svg>
  </Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Media & Press Inquiries</Card.Title>
                                <Card.Text style={{ color: "gray" }}>Journalists, bloggers, and media professionals seeking insights...
                                </Card.Text> <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show3 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme3}>
                            <Card.Text style={{fontSize:"large"}}>
                            Journalists, bloggers, and media professionals seeking insights into the intersection of sleep science and sports performance can reach out for interviews, expert commentary, and access to our latest research findings.
                            </Card.Text>                        </Card>
                    </div>







                    <div>
                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme4} className={`card-container1 ${show4 ? "card-hidden" : ""}`}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" style={{ maxWidth: "35px", marginBottom: "5px" }}   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z"/>
  </svg></Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Speaking Engagements</Card.Title>
                                <Card.Text style={{ color: "gray" }}>Inviting us to share our expertise at your sports-related event...
                                </Card.Text> <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show4 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme4}>
                            <Card.Text style={{fontSize:"large"}}>
                            Inviting us to share our expertise at your sports-related event, conference, or webinar? We're passionate about spreading awareness of the importance of sleep optimization and would be delighted to contribute to your platform.
                            </Card.Text>                        </Card>
                    </div>








                    <div>

                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme5} className={`card-container1 ${show5 ? "card-hidden" : ""}`}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted"><svg  style={{ maxWidth: "35px", marginBottom: "5px" }} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"/>
  </svg></Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Feedback & Testimonials: </Card.Title>
                                <Card.Text style={{ color: "gray" }}>Have you experienced the transformative power...
                                </Card.Text> <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show5 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme5}>
                            <Card.Text style={{fontSize:"large"}}>
                            Have you experienced the transformative power of SomnoTeam's personalized sleep consultations? We value your feedback and would love to hear about your journey toward improved sleep and performance. Share your success stories and testimonials with us!
                            </Card.Text>                        </Card>
                    </div>



                    <div>

                        <Card border="white" style={{
                            width: '18rem', textAlign: "left"
                            , cursor: "pointer"
                        }} onClick={showme6} className={`card-container1 ${show6 ? "card-hidden" : ""}`}>
                            <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">
                                
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" style={{ maxWidth: "35px", marginBottom: "5px" }}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
  </svg></Card.Subtitle>
                                <Card.Title style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Join Our Team</Card.Title>
                                <Card.Text style={{ color: "gray" }}>Are you a sleep specialist, researcher, or professional with a passion...
                                </Card.Text> <Button variant='outline-secondary' >
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>


                        <Card border="white" className={`card-container1 ${show6 ? "" : "card-hidden"}`} style={{
                            width: '18rem', textAlign: "left", cursor: 'pointer', marginLeft: "1rem"

                        }} onClick={hideme6}>
                            <Card.Text style={{fontSize:"large"}}>
                            Are you a sleep specialist, researcher, or professional with a passion for optimizing athlete sleep? Explore career opportunities and collaborations with SomnoTeam as we work together to redefine the landscape of sleep and sports performance.
                            </Card.Text>                        </Card>
                    </div>






                </div>
            </div>






            <br /><br /><br />




        </>
    )
}

export default ContactUs;