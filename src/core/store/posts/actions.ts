import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from './constants';
import axios from 'axios';
export const listPosts = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: POSTS_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      config
    );
    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
