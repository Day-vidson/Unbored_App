import ChuckNorris from "./API/ChuckNorris";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";


function PostsContainerChuck() {
    const [items, setItems] = useState([<ChuckNorris/>, <ChuckNorris/>, <ChuckNorris/>, <ChuckNorris/>, <ChuckNorris/>])
    
    function loadMorePosts() {
        // Adds 3 next posts, while scrolling
        setItems([...items,<ChuckNorris/>, <ChuckNorris/>, <ChuckNorris/>])
    }

    return(
        <div class="postsContainer" 
        id="scrollableDiv"
        style={{
          height: 800,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render next data
                next={loadMorePosts}
                hasMore={true}
                className="postsContainer"
                
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                height={800}    // Height must be fixed, otherwise won't work
                >
                {items}
            </InfiniteScroll>
        </div>
    )
}

export default PostsContainerChuck;