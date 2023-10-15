import "./Articles.css";
import a4 from "../../images/a4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';


function A4() {

    return (
        <>
            <Image src={a4} className="ar-img" rounded />
            <p className="credit">
                Image: Adobe Firefly
            </p>
            
            <h2 className="title">The Science Behind Sleepwalking: A Journey into the Night</h2>

            <p className="article-text">
                <a id="bold">Let's Go for a Walk
                </a>
            </p>
            <p className="article-text">In the scientific and public world of sleep, there exists a mysterious phenomenon that has fascinated scientists, psychologists, and curious minds alike - <strong>sleepwalking</strong>. This almost paradoxical phenomenon of walking while sleeping and being completely unconscious about it is much more prevalent in children than in adults (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5104520/" target="_blank" className="link">1-3%</a>), yet the reasons behind this sleep disorder are far from clear. </p>
<p className="article-text">At its core, sleepwalking is a manifestation of the delicate balance betwee
n different sleep stages. During a typical night's sleep, we oscillate between REM (rapid eye movement) and non-RE
M sleep cycles (light and deep sleep). It is within the <strong>deeper stages of non-REM sleep</strong> th
at <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/parasomnias-sleepwalking" target="_blank"
 className="link">sleepwalking</a> primarily takes its form. This is when the brain is in a state of partial arousal, with some regions active while others remain in slumber. Even weirder, as we fall deeper into sleep, <strong>our muscle tone weakens, yet somehow sleepwalkers are still able to get out of bed</strong>, walk around and do complex activities, from wandering through the house to preparing a meal, all while the individual remains seemingly unaware of their actions.</p><p className="article-text">The science behind sleepwalking can be attributed to a combination of <strong>genetic, environmental, and neurological factors</strong>. It often runs in families, suggesting a genetic predisposition. Additionally, <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/parasomnias-sleepwalking" target="_blank" className="link">common triggers</a> for sleepwalking include the use of sedative agents like alcohol and some medicines (e.g. zolpidem – a sleep medication), as well as being sleep deprived.</p><p className="article-text">&nbsp;From a more neurobiological perspective, sleepwalking is a captivating interplay of neural processes within the human brain. One key player in this intricate neural choreography is the <strong>thalamus</strong>, a critical relay station in the brain that regulates the flow of sensory information coming from the periphery (e.g. touch, temperature…). During sleepwalking episodes, the thalamus appears to be <strong>partially “awake”</strong>, allowing sensory signals to traverse through the brain’s cortex, the outer layer of the brain responsible for higher-level thinking and motor control. However, regions of the brain involved in conscious awareness and self-control, such as the <strong>prefrontal cortex</strong>, remain in a <strong>state of</strong><a href="https://entvoicesnoring.com/articles/2019/11/15/what-is-the-most-compelling-mechanistic-hypothesis-for-the-occurrence-of-sleep-walking-justify-your-choice" target="_blank" className="link"><strong> reduced activity</strong></a>. This disconnection between sensory input and executive control may explain why sleepwalkers can perform complex actions without full awareness. While the exact neural mechanisms triggering sleepwalking remain the subject of ongoing research, it is clear that it is a manifestation of the brain's delicate balance between wakefulness and sleep, highlighting the profound complexity of our neurological landscape during sleep.</p><p className="article-text">So what should you do if you or your loved one experience sleepwalking? Well, you should first try to make sure that they have <strong>no access to any potentially dangerous locations</strong> in the house, such as the balcony or the stairs. Also, it is best <strong>not walking up sleepwalkers</strong> if they are in no imminent danger since the realization of them being in another location apart from their bed can cause confusion, stress or even panic. As always, maintaining a <strong>good sleep hygiene and quality sleep</strong> in general are good ideas on how to minimize the risk of sleepwalking. Sometimes medications like sedatives (e.g. benzodiazepines) may be given, but usually this isn’t necessary.</p><p className="article-text">Sleepwalking, a fascinating part of sleep that only lasts a few minutes, far exceeds our current scientific understanding. Despite this, it remains one of the most talked about sleep disorders and reminds us that sleep is a realm where science, mystery, and the complexities of the human mind converge, offering a <strong>glimpse into the complexities of our nocturnal existence</strong>.</p>






            <p className="article-text">

                <strong>Author: </strong>

                Alen Juginović
            </p>
            <br />



        </>
    )
}

export default A4;