import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
    // Reducers
    todo: todoReducer
})

export default rootReducer;