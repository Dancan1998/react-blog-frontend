import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
} from "../constants/blogConstants";
import axios from "axios";
import { baseUrl } from "../baseUrls";

export const list_of_blogs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_REQUEST });

    const { data } = await axios.get(`${baseUrl}/blog_list`);

    dispatch({ type: GET_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BLOG_FAIL,
      payload: error.message,
    });
  }
};
