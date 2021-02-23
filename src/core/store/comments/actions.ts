import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_FAIL,
  COMMENTS_LIST_CLEAR,
} from './constants';
import axios from 'axios';
export const listComments = (postId: number, page: number) => async (
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
    const {
      comments: { comments },
    } = getState();
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`,
      config
    );
    const commentsPayload = {
      data: [...comments, ...data.slice((page - 1) * 10, page * 10)],
      postId,
    };
    dispatch({
      type: COMMENTS_LIST_SUCCESS,
      payload: commentsPayload,
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
export const clearComments = () => {
  return { type: COMMENTS_LIST_CLEAR, payload: [] };
};
