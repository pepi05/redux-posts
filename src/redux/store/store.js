import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { postsReducer } from "../reducers/postReducer";

//combine all middlewares
const middlewares = [reduxThunk];
const middlewareEnchancers = applyMiddleware(...middlewares);
const store = createStore(
  postsReducer,
  composeWithDevTools(middlewareEnchancers)
);

export default store;
