import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { blogListReducer, singleBlogReducer } from "./reducers/blogReducers";
import { categoryListReducer } from "./reducers/categoryReducers";
import { userLoginReducer } from "./reducers/userReducer";

const middleware = [thunk];

const reducer = combineReducers({
  blogList: blogListReducer,
  singleBlogReducer: singleBlogReducer,
  categoryList: categoryListReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
