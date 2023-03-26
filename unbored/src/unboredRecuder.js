function unboredReducer(state, action) {
    if (state === undefined) {
        return { savedPosts: [1, 2, 3, 4, 5] };
    }

    var savedPosts = state.savedPosts;

    switch (action.type) {
        case "savePost":
            return { savedPosts: savedPosts.push("item") };
        case "deletePost":
            return { savedPosts: savedPosts.splice("item") };
        default:
            return state;
    }
}

export default unboredReducer;