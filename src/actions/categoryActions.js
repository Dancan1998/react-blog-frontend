import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../constants/categoryConstants";
import axios from "axios";
import { baseUrl } from "../baseUrls";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_REQUEST });

    const { data } = await axios.get(`${baseUrl}/category_list`);
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};
