import { combineReducers } from "redux";
import reactionsSlice from "./reactionsSlice";
import savedSlice from "./savedSlice";

// Reducers are made from particular "slices" (where they are made thanks to createSlice(..., reducers: {here1(), here2()}) ) and combined into one "rootRecuder" 
// in order to get passed to index.js -> configureStore(reducer: rootReducer)

const rootReducer = combineReducers({
    reactions: reactionsSlice,
    saved: savedSlice,
});
 
export default rootReducer;
