import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
  POSTS_LIST_CLEAR,
} from './constants';
import { ISPosts } from './index.model';

const initialState: ISPosts = { loading: true, posts: [] };
export const postsListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return { ...state, loading: true };
    case POSTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case POSTS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case POSTS_LIST_CLEAR:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
