import { useSelector } from "react-redux"
import ChuckNorris from "./API/ChuckNorris";
import PostsContainerChuck from "./PostsContainerChuck";

function Saved() {
    // odczytuję aktualny stan ze store'a
    const posts = useSelector((state) => state.saved.posts)
    console.log("posts:")
    console.log(posts)
    

    return (
        <div className="postsContainer">
            <p>Saved posts</p> 

            {posts.map((post) => <ChuckNorris url={post}></ChuckNorris>)}
            

        </div>
    );
}

export default Saved;