import minion from "./icons/bird.gif"

function Homepage() {
    return (
        <div className="Homepage">
            <p className="greetings">Hello, David👋 <br/>
                    Feel bored? <br/>
                    Never again with Unbored!🎉
            </p>
            <img className="minion" src={minion} ></img>
        </div>
    )
}

export default Homepage;