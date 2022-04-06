import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_SINGLE_BLOG_REQUEST,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_FAIL,
} from "../constants/blogConstants";

export const blogListReducer = (
  state = { loading: false, blogs: [], error: false },
  action
) => {
  if (action.type === GET_BLOG_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_BLOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      blogs: action.payload,
    };
  }

  if (action.type === GET_BLOG_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export const singleBlogReducer = (
  state = { loading: false, error: false, singleBlog: {} },
  action
) => {
  if (action.type === GET_SINGLE_BLOG_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_SINGLE_BLOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      singleBlog: action.payload,
    };
  }

  if (action.type === GET_SINGLE_BLOG_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};
