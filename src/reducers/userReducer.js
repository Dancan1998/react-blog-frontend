import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (
  state = { loading: false, userToken: {}, error: false, loggedOut: false },
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
    return {
      ...state,
      userToken: {},
      loggedOut: true,
    };
  }

  return state;
};

export const userRegisterReducer = (
  state = { loading: false, error: false, userDetails: {} },
  action
) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === USER_REGISTER_SUCCESS) {
    return {
      ...state,
      userDetails: action.payload,
      loading: false,
    };
  }

  if (action.type === USER_REGISTER_FAIL) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }
  return state;
};
