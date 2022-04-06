import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../constants/categoryConstants";

export const categoryListReducer = (
  state = { loading: false, error: false, categories: [] },
  action
) => {
  if (action.type === GET_CATEGORIES_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_CATEGORIES_SUCCESS) {
    return {
      ...state,
      loading: false,
      categories: action.payload,
    };
  }

  if (action.type === GET_CATEGORIES_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
