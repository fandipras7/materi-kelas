import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import loger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, loger));

export default store;
