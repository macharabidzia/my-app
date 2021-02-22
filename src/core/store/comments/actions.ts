import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_FAIL,
} from './constants';
import axios from 'axios';
export const listComments = (postId: number) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({
      type: COMMENTS_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`,
      config
    );
    dispatch({
      type: COMMENTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
