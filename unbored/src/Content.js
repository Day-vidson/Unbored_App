import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import ChuckNorris from "./API/ChuckNorris";
import Greetings from "./Greetings";
import Saved from "./Saved";
import Shared from "./Shared";
import Bored from "./API/Bored";
import Post from "./Post";

function Content() {
    return(
        <div className="Content">
            <Routes>
                <Route exact path="/" Component={Greetings}></Route>
                <Route path="/saved" Component={Saved}></Route>
                <Route path="/shared" Component={Shared}></Route>
                <Route path="/chuckNorris" Component={ChuckNorris}></Route>
                <Route path="/bored" Component={Bored}></Route>
                {/* <Route path="/post" Component={Post("testTitle")}></Route> */}
            </Routes>
        </div>
    );
}

export default Content;
