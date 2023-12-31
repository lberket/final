import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import User from "./kontekst";
import { useContext } from 'react';


function Services() {
    const tema = useContext(User);

    return (
        <>
            <User.Provider value={tema}>

                <br /><br /><br />
                <h1 className='au-title'><b>Discover Our Services for {tema == "athlete" ? "Athletes & Teams" : "Individuals"} </b></h1>




                <br />

                <Accordion className='accord2'>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='acc-text'><h2><b style={{ color: "#aa0000" }}><i>{tema == "athlete" ? "Pro " : "Essential "}</i></b>($59/month)</h2></Accordion.Header>
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
                        <Accordion.Header className='acc-text'><h2><b style={{ color: "#aa0000" }}><i>Elite</i> </b>  ($99/month)</h2></Accordion.Header>
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
                                {tema == "athlete" ?
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
                        <Accordion.Header className='acc-text'><h2><b style={{ color: "#aa0000" }}><i>Champion</i> </b>($149/month)</h2></Accordion.Header>
                        <Accordion.Body>
                            <p style={{ textAlign: "left", marginLeft: "5px" }}>
                                {tema == "athlete" ?
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
                                        Integration with {tema == "athlete" ? "Sports Performance Data to Understand the Impact of Sleep on Cognitive and Motor Performance" : " Lifestyle Data to Understand the Impact of Sleep on Your Daily Life"}
                                    </li>

                                </ul>
                            </p>
                            <p style={{ textAlign: "left", marginLeft: "35px", marginRight: "35px" }}>
                                <b>Best for:</b>
                                {tema == "athlete" ?
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




                {tema == "athlete" ?

                    <div>
                        <strong style={{ fontSize: "30px" }} className='a-title'>For Teams, Clubs, Federations & Competitions
                        </strong>
                        <br /><br />
                        <Card
                            bg="light"
                            key="secondary"
                            className="mb-mn"
                        >
                            <Card.Body>

                                <Card.Text style={{ marginBottom: "-30px", fontSize: "19px" }}>
                                    <div style={{ paddingLeft: "2%", paddingRight: "1%" }}>
                                        Are you seeking to elevate the sleep health and performance of your entire team, club, federation or competition participants? Partner with us to design customized sleep optimization programs tailored to the unique needs of your group. We'll work closely with you to establish a holistic approach to sleep enhancement, ensuring that each athlete receives the personalized support they need to achieve their full potential.
                                        <br />
                                        <Link to={"contactus"} style={{ color: "#555555" }}><b>Contact us</b></Link> today to discuss how we can help your team reach new heights of performance through optimized sleep strategies.
                                        <br /><br />
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <br />
                        <strong style={{ fontSize: "26px" }} className='a-title'>        DO YOU NEED A CUSTOM PACKAGE?

                        </strong>
                        <br /><br />
                        <Card
                            bg="light"
                            key="secondary"
                            className="mb-mn"
                        >
                            <Card.Body>

                                <Card.Text style={{ marginBottom: "0px", fontSize: "19px" }}>
                                    <div style={{ paddingLeft: "2%", paddingRight: "1%" }}>
                                        Our team of experts recognizes that every athlete's path to peak performance is unique. That's why we're committed to crafting personalized sleep optimization packages that align with your specific goals and aspirations. Reach out to us today, and let us collaborate with you to design a bespoke sleep optimization plan that complements your training regimen and helps you achieve your athletic dreams.
                                        <br />
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br /><br /><br />
                    </div>
                    :



                    <div>
                        <strong style={{ fontSize: "26px" }} className='a-title'> DO YOU NEED A CUSTOM PACKAGE?
                        </strong>
                        <br /><br />
                        <Card
                            bg="light"
                            key="secondary"
                            className="mb-mn"
                        >
                            <Card.Body>

                                <Card.Text style={{ marginBottom: "-30px", fontSize: "19px" }}>
                                    <div style={{ paddingLeft: "2%", paddingRight: "1%" }}>
                                        Our team of experts understands that every individual's path to enhanced well-being and peak performance is unique. That's why we're committed to tailoring personalized sleep optimization packages that align with your specific goals and aspirations.
                                        <Link to={"contactus"} style={{ color: "#555555" }}><b> Reach out to us</b></Link>  today, and let us collaborate with you to design a bespoke sleep optimization plan that complements your lifestyle and helps you achieve your personal and professional dreams.
                                        <br /><br />
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <br />
                        <p style={{ fontSize: "28px" , fontFamily:"DM Serif Display"}} className='mb-mn'>         <b>
                        Elevate Employee Wellness and Peak Performance With Our Corporate Sleep Optimization Programs 
                        </b>
                        </p>
                        
                        <Card
                            bg="light"
                            key="secondary"
                            className="mb-mn"
                        >
                            <Card.Body>

                                <Card.Text style={{ marginBottom: "-0px", fontSize: "19px" }}>
                                    <div style={{ paddingLeft: "2%", paddingRight: "1%" }}>
                                        Are you seeking to enhance the sleep health and overall well-being of your entire workforce? Partner with our team of experts to design customized sleep optimization programs tailored to the unique needs of your organization. We'll collaborate closely with you to establish a holistic approach to sleep enhancement, ensuring that each employee receives the personalized support they need to achieve their full potential and contribute to the company's success.            </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br /><br /><br />
                        
                    </div>

                }






                {/* <p className='article-text'>
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
            </Accordion> */}


            </User.Provider >

        </>
    )
}

export default Services;