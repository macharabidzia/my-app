import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
  POSTS_LIST_CLEAR,
} from './constants';
import axios from 'axios';
export const listPosts = (page: number) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({
      type: POSTS_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const {
      posts: { posts },
    } = getState();
    console.log(posts);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      config
    );
    const paginatedData = data.slice((page - 1) * 10, page * 10);
    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: [...posts, ...paginatedData],
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
export const clearPosts = () => {
  return { type: POSTS_LIST_CLEAR, payload: [] };
};
