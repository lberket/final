import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import alen from "../images/alen.jpg";
import harvard from "../images/harvard.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import User from "./kontekst";
import Alert from 'react-bootstrap/Alert';


function AboutUs() {


    const [isMobile, setIsMobile] = useState(false);
    const tema = useContext(User);
  
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth >= 992);
  
      };
  
      handleResize(); // Check initial screen width
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
return(
    <>

<User.Provider value={tema}>

    <br /><br /><br />
    
    <h1 className='au-title'>About Us</h1>


<div style={{fontSize:"20px"}}>

<br />
{tema=="athlete" ? 

<Alert key="light" variant="light">
  <p className='alert-text0'>
      Our team of experts is dedicated to crafting personalized sleep optimization strategies tailored to each athlete's unique needs and goals. We go beyond simply providing data; we guide athletes through comprehending the results and their impact on performance. Our unwavering commitment extends beyond initial assessment, offering longitudinal support to ensure sustained success. We empower athletes to continuously adapt and refine their sleep strategies, ensuring they maintain their competitive edge throughout their athletic journey.

  </p>
</Alert>
:
<Alert key="light" variant="light">
<p className='alert-text0'>
Our team of experts is dedicated to crafting personalized sleep optimization strategies tailored to each individual's unique needs and goals. We go beyond simply providing data; we guide individuals through comprehending the results and their impact on their overall well-being and productivity. Our unwavering commitment extends beyond initial assessment, offering longitudinal support to ensure sustained success. We empower individuals to continuously adapt and refine their sleep strategies, ensuring they maintain optimal health and vitality throughout their lives.
</p>
</Alert>
}


<br />
</div>

    <h2 className='au-title' style={{color:"#595959"}}>Our team:</h2>





    <div className='club-center'>



<div className='clubs-row2'>

  <div className="clubs" onClick={handleShow} style={{cursor:"pointer", marginBottom:"-60px"}}>
    
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




  <div className="clubs" onClick={handleShow1} style={{cursor:"pointer", marginBottom: "-60px"}}>
  <br /> <br /> <br /> 
    <br />
    <div style={{marginLeft:"30px", marginRight:"30px"}}>

   
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





  <div className="clubs" onClick={handleShow2} style={{cursor:"pointer"  ,  marginBottom: "-60px"
}}>
    <br /> <br /> <br /> <br /> 
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

<br />

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




<Modal show={show} onHide={handleClose}       size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

                    <Modal.Body>

                   
                    <img src={harvard} alt="" style={{maxWidth:"150px", maxHeight:"120px", marginTop:"10px"}}/>
                   <br/>
                    <p style={{margin:"10px"}}>
                    Alen brings extensive expertise in sleep research and medicine to our team. 
                    Currently affiliated with <u>Harvard Medical School</u> in the USA, Dr. 
                    Juginović has a deep understanding of the intricacies of sleep and its 
                    impact on athlete performance. His <u>research contributions in the field of 
                    sleep medicine and clinical experience</u>, as well as organizing <u>conferences 
                    which brought together more than 2300 guests and 10 Nobel 
                    laureates</u> make him a thought leader in the field.
           
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>




                <Modal show={show1} onHide={handleClose1}       size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

                    <Modal.Body>

                   
                    <p style={{margin:"10px"}}>
                    Miro contributes his expertise in <u>biostatistics and research</u> to our team. 
                    With a background in medicine and a focus on statistical analysis, Dr. 
                    Vuković ensures that our sleep assessments and program evaluations are 
                    backed by robust and accurate data. His research work at the <u>University 
                    of Split School 
                    of Medicine</u> in Croatia strengthens our scientific foundation.
           
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



                <Modal show={show2} onHide={handleClose2}       size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

                    <Modal.Body>

                   
                    <p style={{margin:"10px"}}>
                    Ivan brings a unique combination of expertise in <u>emergency medicine and data 
                    analysis</u> to our team. His experience in both medical practice and data-driven
                     analysis allows us to interpret and make the most of the sleep data we 
                     collect from athletes. Dr. Aranza ensures that our <u>research has solid 
                     methodological foundations</u> and that our 
                    <u>sleep programs are evidence-based and tailored to individual needs</u>.
           
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



<br />



{tema=="athlete" && 

<Row>
    <Col xs={1} md={2} lg={2}>

        </Col>
        <Col xs={10} md={8} lg={4} style={{display: isMobile ? "flex" : "none"}}>

        <Card        bg="light"
          key="secondary">
        <Card.Body>
          <Card.Text>
          <p style={{padding:"10px", marginBottom:"-1px", fontSize:"18.5px", fontFamily:'DM Serif Display', color:"#555555"}}>
        At SomnoTeam, we have assembled a <u>highly skilled and abmitious team of 
        professionals</u> dedicated to optimizing athlete sleep and performance. Our 
         <u> team combines medical expertise, research knowledge, and business acumen</u> to provide comprehensive and effective personalized sleep consultations. Building on our expertise and commitment to optimizing athlete sleep, we have already <u>established strong partnerships and conducted sleep 
         research in collaboration with leading clubs such as</u> <b>Real Madrid C.F</b>. and 
         <b> RB Leipzig. </b>   
         </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

        


        </Col>
        <Col  xs={0} md={0} lg={4} style={{display: isMobile ? "flex" : "none"}}>

        <Card        bg="light"
          key="secondary">
        <Card.Body>
          <Card.Text>
        <p  style={{padding:"10px", paddingLeft:"15px", marginBottom:"-1px", fontSize:"18.5px", fontFamily:'DM Serif Display', color:"#555555"}}>
        These collaborations have provided us with invaluable <u>experience, insights, 
        and a deep understanding</u> of the sleep challenges faced by top-level football 
        teams. Working closely with athletes, coaches, and support staff, we have 
        gained firsthand knowledge of the unique demands of the sport and the 
        critical role that sleep plays in athletic performance. This experience 
        positions us as leaders in the field and enables us to leverage our 
        extensive knowledge to provide exceptional sleep consultation services 
        to athletes and teams worldwide.   
        </p>
        </Card.Text>
        </Card.Body>
      </Card>
        </Col>

        <Col xs={10} md={8} lg={4} style={{display: isMobile ? "none" : "flex"}}>


        <Card        bg="light"
          key="secondary">
        <Card.Body>
          <Card.Text>
        <p>
        At SomnoTeam, we have assembled a <u>highly skilled and abmitious team of 
        professionals</u> dedicated to optimizing athlete sleep and performance. Our
         <u>team combines medical expertise, research knowledge, and business acume
         n</u> to provide comprehensive and effective personalized sleep consultatio
         ns. Building on our expertise and commitment to optimizing athlete sleep
         , we have already <u>established strong partnerships and conducted sleep 
         research in collaboration with leading clubs such as</u> <b>Real Madrid C.F</b>. and 
         <b> RB Leipzig. </b>            
        These collaborations have provided us with invaluable <u>experience, insights, 
        and a deep understanding</u> of the sleep challenges faced by top-level football 
        teams. Working closely with athletes, coaches, and support staff, we have 
        gained firsthand knowledge of the unique demands of the sport and the 
        critical role that sleep plays in athletic performance. This experience 
        positions us as leaders in the field and enables us to leverage our 
        extensive knowledge to provide exceptional sleep consultation services 
        to athletes and teams worldwide.             
       </p> 
       </Card.Text>
        </Card.Body>
      </Card>

</Col>
    
      </Row>
}

<br />

                <h2 className='au-title' style={{color:"#595959"}}>What Differentiates Us from the Rest? </h2>


<br />


                <Accordion className='accord'>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{padding:"8px", marginBottom:"-8px"}}><h5><b>Holistic Approach and Personalization</b></h5></Accordion.Header>
        <Accordion.Body style={{fontSize:"16.5px", textAlign:"left"}}>
          
        Unlike generic solutions in the market, we recognize that <u>each athlete has 
        their own unique sleep patterns and requirements</u> influenced by factors such 
        as training schedules, competition stress, and recovery demands. Our 
        holistic and personalized approach takes into account the multifaceted 
        aspects of an athlete's life and performance, <u>addressing not only sleep 
        duration and quality but also considering 
        other critical factors that impact overall well-being and athletic success</u>. 
        
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header  style={{padding:"8px", marginBottom:"-8px"}}><h5><b>Expert Team from Leading World Institutions</b></h5></Accordion.Header>
        <Accordion.Body  style={{fontSize:"16.5px", textAlign:"left"}}>
        Our team of sleep experts is the driving force behind our exceptional 
        services. We have carefully assembled a roster of renowned sleep consultants 
        and coaches from some of the world's most prestigious institutions, including 
        <u> Harvard Medical School, Cleveland Clinic, and Brigham and Women's Hospital</u>. 
        With an unparalleled depth of knowledge in various fields, our experts bring 
        <u> expertise in sleep science, athlete sleep optimization, neurology, 
        psychiatry, and nutrition</u> to the table. Their extensive experience in these 
        domains ensures that our clients receive the highest level of care and 
        guidance available in the industry. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header style={{padding:"8px", marginBottom:"-8px"}}><h5><b>Ongoing Support and Refinements</b></h5></Accordion.Header>
        <Accordion.Body  style={{fontSize:"16.5px", textAlign:"left"}}>
        We understand that <u>sleep optimization is not a one-time event</u> but an ongoing journey. We go beyond the one-time consultation. Our commitment to athletes' success means we follow them throughout their journey, providing continuous support, monitoring, and adjustment of their sleep programs. This ensures sustained improvements in sleep quality and performance.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header style={{padding:"8px", marginBottom:"-8px"}}><h5><b>Data-Driven Insights</b></h5></Accordion.Header>
        <Accordion.Body  style={{fontSize:"16.5px", textAlign:"left"}}>
        We believe in the power of data to drive meaningful results. We go beyond 
        subjective assessments by leveraging advanced wearable technology and sleep 
        tracking devices to collect objective sleep data. <u>This data, combined with 
        our experts' analysis, allows us to gain comprehensive insights</u> into an 
        athlete's sleep patterns, trends, and specific areas for improvement. By basing our recommendations on concrete data, 
        we ensure a more accurate and effective approach to sleep optimization.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

</User.Provider>
    </>
)
}

export default AboutUs;