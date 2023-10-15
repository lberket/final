import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Outlet, Link } from "react-router-dom";
import a2 from "../images/a2.jpg";
import a1 from "../images/a1.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.png";
import a5 from "../images/a5.jpeg";
import a6 from "../images/a6.jpeg";
import a7 from "../images/a7.jpeg";
import a8 from "../images/a8.png";


function Articles(props) {

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



  return (
    <>

    <h1 className='research-title'>
    Sleep Research & Insights: </h1><h1  className='research-title2'>
    Advancing Athlete Performance through Scientific Knowledge
    </h1>

<h5 className='research'>
At SomnoTeam, we are committed to staying at the forefront of sleep science and continuously expanding our understanding of the intricate relationship between sleep and athletic performance. Our "Sleep Research & Insights" section offers a wealth of <b>valuable information</b>, <b>research findings</b>, and <b>expert insights</b> to empower athletes, sports professionals, and enthusiasts alike.
</h5>
      {/* <h2 className='articles-title'>Articles</h2> */}

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: Sep 3, 2023</Card.Header>
        <Card.Body>
          <Link to={"article4"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a4} className='article-img' />
          </Link>

<Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article4"}>   {articles[3]}
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
          In the scientific and public world of sleep, there exists a mysterious phenomenon that has fascinated scientists, psychologists, and curious minds alike - sleepwalking. 
          This almost paradoxical phenomenon of walking while sleeping and being completely unconscious...
          </Card.Text>
      
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: Aug 12, 2023</Card.Header>
        <Card.Body>
          <Link to={"article5"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a5} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article5"}>   {articles[4]}
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
          Pregnancy, a dynamic process characterized by a myriad of physiological changes, orchestrates a multifaceted interplay that shapes the trajectory of maternal and fetal development. Amidst the unfolding narrative of life's inception...
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: Jul 30, 2023</Card.Header>
        <Card.Body>
          <Link to={"article6"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a6} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article6"}>   {articles[5]}
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
          Sleep is an essential physiological process that allows our bodies and minds to recharge and regenerate. However, for astronauts floating amidst the wonders of space, sleep takes on a whole new (and weightless) dimension...
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: Jul 15, 2023</Card.Header>
        <Card.Body>
          <Link to={"article7"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a7} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article7"}>   {articles[6]}
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
          The world of sleep is as diverse as the cultures that inhabit our planet. From bedtime rituals steeped in ancient traditions to modern adaptations influenced by globalization, the way we sleep varies across different societies.
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: Jul 2, 2023</Card.Header>
        <Card.Body>
          <Link to={"article8"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a8} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article8"}>   {articles[7]}
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
          We all recognize the significance of quality sleep for our overall well-being. A good night's sleep not only rejuvenates our minds and bodies but also plays a vital role in maintaining optimal physical and mental health...
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className={"mb-2 articles"}
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: </Card.Header>
        <Card.Body ><Link to={"article1"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Card.Img src={a1} className='article-img' />
        </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={'article1'}>
              Back to school - later? Sleep, school start times and academic performance </Link>
          </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
            We all know good sleep is one of the main pillars of mental and physical health. Therefore, it is alarming to hear that a third of adults have trouble sleeping at any given time, elevating their risk of a whole spectrum of cardiometabolic, neurological and psychiatric disorders in the long term.
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: </Card.Header>
        <Card.Body>
          <Link to={"article2"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a2} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}>
            <Link style={{ color: "#555555" }} to={"article2"}>   Short sleep a day keeps your memories far away
            </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
            We’ve all experienced short-term complete or partial lack of sleep in our lives. The next day we don’t feel great. In fact, we may have emotional swings, lack of concentration, poorer memory and other cognitive issues.

          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card
        className="mb-2 articles"
      >
        <Card.Header style={{ textAlign: "left", fontSize: "smaller" }}>Date: </Card.Header>
        <Card.Body>
          <Link to={"article3"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Card.Img src={a3} className='article-img' />
          </Link>
          <Card.Title style={{ textAlign: "left" }}><Link style={{ color: "#555555" }} to="article3">  Can regular exercise help you sleep better?
          </Link> </Card.Title>
          <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
            Regular exercise is one of the cheapest and most efficient ways to preserve good health. Similar can be said about sleep – a whole-body process incredibly important both for mental and physical health. Yet, so many people neglect not only sleep, but daily exercise too.  </Card.Text>
        </Card.Body>
      </Card>

      <br /> <br /> <br />

    </>
  )
}

export default Articles;