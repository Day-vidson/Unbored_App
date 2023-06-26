import { createSlice } from '@reduxjs/toolkit'
// this is a sort of branch in whole redux store, called saved
//  it has some functions as save, delete, or clear

const initialState = {
  posts: []
}



export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    savePost: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts.push(action.payload)
    },
    deletePost: (state, action) => {
      let index = state.posts.indexOf(action.payload)


      if (index === 0) {
        state.posts.splice(index, index+1)
      } else {
        state.posts.splice(index, index)
      }
      
    },
    clear: (state) => {
      state.posts = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { savePost, deletePost, clear } = savedSlice.actions

export default savedSlice.reducer