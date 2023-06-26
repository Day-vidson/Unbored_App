import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}



const myArray = [1, 2, 3, 4, 5];

const index = myArray.indexOf(2);

const x = myArray.splice(index, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);




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
    delete: (state, action) => {
      let posts = useSelector((state) => state.saved.posts)(2)


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