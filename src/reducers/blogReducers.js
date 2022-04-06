import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
} from "../constants/blogConstants";

export const blogListReducer = (
  state = { loading: false, blogs: [], error: false },
  action
) => {
  console.log(state, action);
  if (action.type === GET_BLOG_REQUEST) {
  }

  return state;
};
