import axios from 'axios';
import {
  REPLIES_LIST_REQUEST,
  REPLIES_LIST_SUCCESS,
  REPLIES_LIST_FAIL,
} from './constants';

export const listReplies = (postId: number) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({
      type: REPLIES_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get('replies.json', config);

    dispatch({
      type: REPLIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPLIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
