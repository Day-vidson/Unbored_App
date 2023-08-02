const initialState = new Map()

let id = "abc123"

let reactions = new Map()
reactions.set("like", 0)
reactions.set("dislike", 0)
reactions.set("loveIt", 0)
reactions.set("wow", 0)

initialState.set(id, reactions)

console.log(initialState)