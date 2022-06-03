import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
});

export default rootReducer;
