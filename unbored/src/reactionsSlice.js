import { createSlice } from '@reduxjs/toolkit'
// this is a sort of branch in whole redux store, called reactions
//  it stores count of specific reactions

const initialState = {
  id: "",
  thumbUp: 0,
  thumbDown: 0,
  wow: 0,
  loveIt: 0,
}


export const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {

    // !!! zmapowac action creators ze stanami reackji w Likes.js 

    increaseThumbUp: (state, action) => {
      state.reactions.posts.thumbUp += 1
    },

    decreaseThumbUp: (state, action) => {
      state.reactions.posts.thumbUp -= 1
    },

    increaseThumbDown: (state, action) => {
      state.reactions.posts.thumbDown += 1
    },

    decreaseThumbDown: (state, action) => {
      state.reactions.posts.thumbDown -= 1
    },
    
    increaseWow: (state, action) => {
      state.reactions.posts.wow += 1
    },

    decreaseWow: (state, action) => {
      state.reactions.posts.wow -= 1
    },
    
    increaseLoveIt: (state, action) => {
      state.reactions.posts.loveIt += 1
    },

    decreaseLoveIt: (state, action) => {
      state.reactions.posts.loveIt -= 1
    },
    
    setId: (state, action) => {
      state.reactions.posts.id = action.payload
    }

    // !!! zmapowac action creators ze stanami reackji w Likes.js 
    
    
  },
})

// Action creators are generated for each case reducer function
export const { increaseThumbUp, decreaseThumbUp, increaseThumbDown, decreaseThumbDown, increaseWow, decreaseWow, increaseLoveIt, decreaseLoveIt, setId} = reactionsSlice.actions

export default reactionsSlice.reducer