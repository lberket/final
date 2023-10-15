import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";


function Search(props) {

    const articles =[
        "Back to school - later? Sleep, school start times and academic performance",
        "Short sleep a day keeps your memories far away",
        "Can regular exercise help you sleep better?",
        "The Science Behind Sleepwalking: A Journey into the Night",
        "Sleeping for Two: How a Good Night's Sleep Shapes a Healthy Pregnancy",
        "Sleeping on the International Space Station: The Unknown Frontier of Sleep in Space",
        "History of Sleep: The Transformation of Sleep Practices from Ancient Egypt to Today",
        "Rest and Digest: The Unexpected Link between Sleep and the Gut"
    ]

    function lalal(){
        console.log(props.searchtext)

    }
    
return(
    <>

    
    <h1 className='articles-title'>Articles</h1>

<a href="article1">1</a>
<br />
<a href="article2">2</a>
<br />
<a href="article3">3</a>

<br />

<button onClick={lalal}>
    baaaaaaaaaaaaaa
</button>

<h2>
    {props.searchtext}
</h2>


    </>
)
}

export default Search;