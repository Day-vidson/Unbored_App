// const initialState = new Map()

// let id = "abc123"

// let reactions = new Map()
// reactions.set("like", 0)
// reactions.set("dislike", 0)
// reactions.set("loveIt", 0)
// reactions.set("wow", 0)

// initialState.set(id, reactions)

// console.log(initialState)

function newPost(id) {
    let post = {
        uuid: id,
        reactions: {
            thumbUp: 0,
            thumbDown: 0
        }
    }
    return post;
}


let posts = []
posts.push(newPost("testID1"))
posts.push(newPost("testID2"))
posts.push(newPost("testID3"))

console.log(posts)