import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    save: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts.push(action.payload)
    },
    clear: (state) => {
      state.posts = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { save, clear } = savedSlice.actions

export default savedSlice.reducer