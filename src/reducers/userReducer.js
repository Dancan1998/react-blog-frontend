import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (
  state = { loading: false, userToken: {}, error: false },
  action
) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      userToken: action.payload,
    };
  }

  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === USER_LOGOUT) {
    return {};
  }

  return state;
};
