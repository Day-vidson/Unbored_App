import { useState } from "react";

function Post(posttitle) {
    const [title, setTitle] = useState(posttitle);

    return(
        <div className="joke">
            <div className="gif">
                <img className="gifImage"></img>   
            </div>
            <div className="jokeContainer">
                <h2 className="jokeTitle">{title}</h2>
                <div className="jokeText">
                    <p>
                        {}
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

export default Post;