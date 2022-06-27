import { combineReducers, createStore } from "redux";
import { postReducer } from "./reducers";

const reducer = combineReducers({
  posts: postReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
