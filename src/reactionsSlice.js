import { createSlice } from '@reduxjs/toolkit'
// Immutable.js
const { Map } = require('immutable');

// This is a slice in redux store, called reactions
//  it stores count of specific reactions of specific IDs

const initialState = {
  posts: []
}

// initialState.set('', maps)
// {
//   id: "",
//   thumbUp: 0,
//   thumbDown: 0,
//   wow: 0,
//   loveIt: 0,
// }


export const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {

    // !!! zmapowac action creators ze stanami reackji w Likes.js 

    // increaseThumbUp: (state) => {
    //   state.reactions.posts.thumbUp += 1
    // },

    // decreaseThumbUp: (state) => {
    //   state.reactions.posts.thumbUp -= 1
    // },

    // increaseThumbDown: (state) => {      
    //   state.reactions.posts.thumbDown += 1
    // },

    // decreaseThumbDown: (state) => {
    //   state.reactions.posts.thumbDown -= 1
    // },
    
    // increaseWow: (state) => {
    //   state.reactions.posts.wow += 1
    // },

    // decreaseWow: (state) => {
    //   state.reactions.posts.wow -= 1
    // },
    
    // increaseLoveIt: (state) => {
    //   state.reactions.posts.loveIt += 1
    // },

    // decreaseLoveIt: (state) => {
    //   state.reactions.posts.loveIt -= 1
    // },
    
    setNewEntry: (state, action) => {
      state.posts.push(action.payload)
    }

    // !!! zmapowac action creators ze stanami reackji w Likes.js 
    
    
  },
})

// Action creators are generated for each case reducer function
export const { increaseThumbUp, decreaseThumbUp, increaseThumbDown, decreaseThumbDown, 
                increaseWow, decreaseWow, increaseLoveIt, decreaseLoveIt, setNewEntry} = reactionsSlice.actions

export default reactionsSlice.reducer