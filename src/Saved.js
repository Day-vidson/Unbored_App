import { useSelector } from "react-redux"
import ChuckNorris from "./API/ChuckNorris";
import Activity from "./API/Activity";

function Saved() {
    // Reading actual state from store
    const postsChuck = useSelector((state) => state.saved.posts)

    const postsActivity = useSelector((state) => state.savedActivity.posts)

    let listOfChuck = []
    let listOfActivity = []
    listOfChuck.push(postsChuck.map((post) => <ChuckNorris url={post} isLiked={true}></ChuckNorris>))
    listOfActivity.push(postsActivity.map((post) => <Activity url={post} isLiked={true}></Activity>))

    let list = [].concat(listOfChuck, listOfActivity)
    

    return (
        <div className="postsContainer">

            {list}
            

        </div>
    );
}

export default Saved;