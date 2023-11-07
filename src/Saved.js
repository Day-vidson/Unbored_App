import { useSelector } from "react-redux"
import ChuckNorris from "./API/ChuckNorris";

function Saved() {
    // Reading actual state from store
    const posts = useSelector((state) => state.saved.posts)
    console.log("posts:")
    console.log(posts)
    

    return (
        <div className="postsContainer">
            <p>Saved posts</p> 

            {posts.map((post) => <ChuckNorris url={post} isLiked={true}></ChuckNorris>)}
            

        </div>
    );
}

export default Saved;