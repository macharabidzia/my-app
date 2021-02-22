import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_FAIL,
  COMMENTS_SET_ACTIVE_POST_ID,
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
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`,
      config
    );
    console.log(data);
    const commentsPayload = data.slice((page - 1) * 10, page * 10);
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

export const setActivePostId = (id: number) => {
  return { type: COMMENTS_SET_ACTIVE_POST_ID, payload: id };
};
