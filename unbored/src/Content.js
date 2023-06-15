import {
    Route,
    Routes
} from "react-router-dom";
import Homepage from "./Homepage";
import Saved from "./Saved";
import Shared from "./Shared";
import PostsContainerActivity from "./PostsContainerActivity";
import PostsContainerChuck from "./PostsContainerChuck";

function Content() {
    return(
        <div className="Content">
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route path="/saved" Component={Saved}></Route>
                <Route path="/shared" Component={Shared}></Route>
                <Route path="/jokes" Component={PostsContainerChuck}></Route>
                <Route path="/activities" Component={PostsContainerActivity}></Route>
                {/* <Route path="/post" Component={Post("testTitle")}></Route> */}
            </Routes>
        </div>
    );
}

export default Content;
