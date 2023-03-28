import { useSelector } from "react-redux"

function Saved() {
    // odczytuję aktualny stan ze store'a
    const posts = useSelector((state) => state.saved.posts)


    return (
        <div>
            <p>Saved posts</p> 
            
            {posts.map((post) => <div>{post}</div>)}
            
            
        </div>
    );
}

export default Saved;