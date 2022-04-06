import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { blogListReducer, singleBlogReducer } from "./reducers/blogReducers";
import { categoryListReducer } from "./reducers/categoryReducers";

const middleware = [thunk];

const reducer = combineReducers({
  blogList: blogListReducer,
  singleBlogReducer: singleBlogReducer,
  categoryList: categoryListReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
