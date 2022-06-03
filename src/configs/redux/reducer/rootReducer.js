import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
