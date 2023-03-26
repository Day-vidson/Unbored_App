import chuckGif from "../icons/chuck.gif"

function ChuckNorris() {

    function GetJoke(yourUrl){
        var Httpreq = new XMLHttpRequest();
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }

    function ParseJoke(response) {
        var json_joke = JSON.parse(response);
        console.log(json_joke)
        var joke = json_joke.value;
        return joke;
    }
    // "https://api.chucknorris.io/jokes/random"
    
    var joke = ParseJoke(GetJoke("https://api.chucknorris.io/jokes/random"))

    


    return(
        <div className="joke">
            <div className="gif">
                <img className="gifImage" src={chuckGif}></img>   
            </div>
            <div className="jokeContainer">
                <h2 className="jokeTitle">jokeTitle</h2>
                <div className="jokeText">
                    <p>
                        {joke}
                    </p>
                    
                </div>
                <div className="jokeButtonsDiv">
                <button className="Saved jokeButtons">❤</button>
                <button className="Shared jokeButtons">✈</button>
                </div>
            </div>
        </div>
    );
}

export default ChuckNorris;