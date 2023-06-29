import { createSlice } from '@reduxjs/toolkit'
// this is a sort of branch in whole redux store, called reactions
//  it stores count of specific reactions

const initialState = {
  thumbUp: 0,
  thumbDown: 0,
  wow: 0,
  loveIt: 0,
}

var reactions = state.reactions;

export const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    increase: (state, action) => {
        reactions.thumbUp += 1
    },

    decrease: (state, action) => {
        reactions
    },
    
    // jak to zrobic? bo potrzebuje + i - dla kazdej reakcji, mam ich 4
    
  },
})

// Action creators are generated for each case reducer function
export const { increase, decrease } = reactionsSlice.actions

export default reactionsSlice.reducer