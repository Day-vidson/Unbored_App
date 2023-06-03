import {
    Route,
    Routes
} from "react-router-dom";
import ChuckNorris from "./API/ChuckNorris";
import Homepage from "./Homepage";
import Saved from "./Saved";
import Shared from "./Shared";
import Activity from "./API/Activity";
import PostsContainer from "./PostsContainer";

function Content() {
    return(
        <div className="Content">
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route path="/saved" Component={Saved}></Route>
                <Route path="/shared" Component={Shared}></Route>
                <Route path="/jokes" Component={PostsContainer}></Route>
                <Route path="/activities" Component={Activity}></Route>
                {/* <Route path="/post" Component={Post("testTitle")}></Route> */}
            </Routes>
        </div>
    );
}

export default Content;
