import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


function Services() {

    return (
        <>
            <br /><br /><br />
            <h1 className='au-title'>Our Services for Athletes & Teams</h1>






            <p className='article-text'>
                At SomnoTeam, we recognize that sleep is a cornerstone of peak athletic performance and overall well-being. Our personalized sleep consultation model is designed to cater to the unique sleep needs of <u>both individual athletes and teams</u>. Whether you're a dedicated athlete looking to <b>enhance your performance</b> or a sports team <b>striving for excellence</b>, our comprehensive approach ensures that you achieve the sleep quality necessary for optimal results.

            </p>


            <p className='article-text'>

                Our comprehensive sleep assessments begin with validated sleep questionnaires to gather detailed information about an athlete's sleep patterns, duration, quality, and any potential sleep-related challenges they may be facing. This data serves as the foundation for our <u>personalized sleep programs</u>. Additionally, we leverage advanced wearable technology, such as sleep trackers, to obtain objective data on sleep stages, heart rate variability, and other relevant sleep metrics. By combining subjective and objective data, we gain a comprehensive understanding of an athlete's sleep profile, enabling us to tailor our approach with precision.
            </p>



            <br />
            <Accordion className='accord2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ padding: "8px", paddingTop: "12px" }}><h5><b>For Individual Athletes: Elevate Your Performance</b></h5></Accordion.Header>
                    <Accordion.Body>

                    <p style={{ textAlign: "left", marginLeft: "5px" }}>Our personalized sleep consultation model for individual athletes is centered around your specific goals and challenges. We understand that your sleep patterns are influenced by factors such as training schedules, competition stress, and recovery demands. That's why we offer three tailored subscription tiers to meet your unique needs:</p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                            1.	<b>Boost</b> ($399/month): Access a comprehensive sleep assessment, personalized sleep program development, and ongoing support to optimize your sleep quality, recovery, and overall performance.
                        </p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        2.	<b>Pro Boost</b> ($699/month): Enjoy all the benefits of the Boost package, along with advanced features such as a sleep performance dashboard, jet lag/travel fatigue program, stress management techniques, and referrals to leading sleep clinics.
                        </p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        3.	<b>Champion</b> ($999/month): Experience the pinnacle of personalized sleep optimization. In addition to Pro Boost features, you'll receive direct support from sleep experts, comprehensive sleep analysis using cutting-edge technology, consultations with a neurologist for advanced analysis and intervention, personalized nutrition plans, mental health evaluation, and coordinated care among experts from world-renowned institutions.
                        </p>


                        <Button variant="outline-danger" style={{marginLeft: "35px",marginBottom: "25px" ,display: "flex", maxWidth:"max-content", fontWeight: "bold" }} href="
                        https://koalendar.com/e/meeting-with-dr-alen-juginovic-koa1gBks">Book your free consultation now</Button>


                        <p style={{ textAlign: "left", marginLeft: "5px" , color:"#9a9a9a", fontSize:"15px"}}>
                        * Please note that these descriptions are provided as examples, and you can modify and customize them to accurately reflect the details and benefits of your personalized sleep consultation model for individual athletes and teams.                            </p>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header style={{ padding: "8px", paddingTop: "12px" }}><h5><b>For Sports Teams: Enhance Collective Performance</b></h5></Accordion.Header>
                    <Accordion.Body>


                    <p style={{ textAlign: "left", marginLeft: "5px" }}>
                    Our personalized sleep consultation model extends beyond individual athletes to benefit entire sports teams. We work closely with teams to understand their unique dynamics, training schedules, and performance goals. Through tailored programs and support, we help teams optimize their sleep collectively for improved results:                        </p>
                        
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                            1.	<b>	Customized Team Packages</b> : Our team of sleep experts collaborates with your coaching staff and medical professionals to create customized sleep programs that align with your team's needs and objectives.</p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        2.	<b>Comprehensive Analysis</b>: We conduct in-depth sleep assessments for each team member, using state-of-the-art technology to gather objective data and insights.</p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        3.	<b>Strategic Interventions</b>: Our sleep experts provide actionable recommendations and interventions to improve sleep quality, enhance recovery, and boost overall team performance.</p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        4.	<b>Education and Workshops</b>: We offer educational sessions and workshops to educate athletes and coaching staff about the importance of sleep and effective strategies for optimizing sleep within the team environment.
                        </p>
                        <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                        5.	<b>Ongoing Monitoring</b>: We maintain regular check-ins and follow-ups to track progress, make necessary adjustments, and ensure continuous improvements in sleep quality and team performance.
                        </p>

                        <Button variant="outline-danger" style={{marginLeft: "35px",marginBottom: "25px" ,display: "flex", maxWidth:"max-content", fontWeight: "bold" }} href="
                        https://koalendar.com/e/meeting-with-dr-alen-juginovic-koa1gBks">Book your free consultation now</Button>


                        <p style={{ textAlign: "left", marginLeft: "5px"}}>
                        At SomnoTeam, we take pride in being your trusted sleep optimization partner, dedicated to helping both individual athletes and sports teams achieve their full potential through personalized sleep programs and expert guidance. Join us on a transformative journey towards peak performance and well-being.
                        </p>                        <p style={{ textAlign: "left", marginLeft: "5px" , color:"#9a9a9a", fontSize:"15px"}}>

                        * Please note that these descriptions are provided as examples, and you can modify and customize them to accurately reflect the details and benefits of your personalized sleep consultation model for individual athletes and teams.                            </p>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </>
    )
}

export default Services;