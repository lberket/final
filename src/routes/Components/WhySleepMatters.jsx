import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";



function WhySleepMatters() {

return(
    <>
    <br /><br /><br />
    <h1 className='au-title'>Why Sleep Matters</h1>



    <p className="article-text">

    Sleep is an <u>essential aspect of overall health and well-being</u>, playing a 
    critical role in maintaining <b>physical and mental health</b>. Sleep is also a 
    <b> vital component of athletic performance</b>, yet it is often overlooked and 
    undervalued. More than <b>50%</b> <u>of athletes struggle with suboptimal sleep</u> with 
    and <b>1 in 4</b> suffering from <u>highly disturbed sleep</u>. Despite this, many do not 
    even report existing sleep disturbances which could have a detrimental 
    effect on their performance (1). <u>Football and basketball players</u>, in 
    particular, are at a <u>higher risk of sleep disturbances</u> due to their 
    demanding schedules, frequent travel, and high physical demands (6). 
    In 2018-2019 season, for example, the <u>average National Basketball 
    Association (NBA) team played every 2.07 days</u>, had 13.3 back-to-back sets, 
    and flew the equivalent of 250 miles a day for 25 straight weeks (7). Thus, 
    players are rarely provided with 2 or more days of recovery between games, 
    which can lead to poor sleep (7). In footballer, one study showed that at 
    least <u>one third of player reported 
    excessive daytime sleepiness</u> which can significantly hinder performance (8).
<br />
<img src={graph1} style={{width:"100%", marginTop:"20px"}} alt="" />
</p>
<p className="article-text">
<u>Inadequate sleep</u> can cause fatigue, which can lead to <b>decreased motor control 
and balance, increased risk of injury</b> (Figure 2), <u>slower reaction times, 
decreased attention and impaired decision-making abilities</u> (9,10). In addition, 
inadequate sleep can lead <u>slower running and sprint times</u> (11,12). Poor sleep 
quality can also lead to <b>mood disturbances</b>, <u>negatively affecting an athlete’s 
emotional well-being and competitive performance</u> (13). 
All of this reduces the player’s ability to reach full potential. 
<br />
<img src={graph2} style={{maxWidth:"100%", marginTop:"20px"}} alt="" />
</p>
<p className="article-text">
<u>Existing solutions in the market often provide</u> <b>generic sleep recommendations  </b> 
 that do not take into account the unique sleep challenges faced by athletes. 
Athletes have distinct sleep patterns and requirements influenced by factors 
such as training schedules, competition stress, and recovery demands. This  <u>lack of personalization</u> in existing solutions creates a gap in the market 
that we are uniquely positioned to fill.
</p>

<br />






    </>
)
}

export default WhySleepMatters;