import {
  REPLIES_LIST_REQUEST,
  REPLIES_LIST_SUCCESS,
  REPLIES_LIST_FAIL,
  REPLIES_SET_POST_ID,
} from './constants';

export const repliesListReducer = (
  state = { loading: true, replies: [] },
  action: any
) => {
  switch (action.type) {
    case REPLIES_LIST_REQUEST:
      return { ...state, loading: true };
    case REPLIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        replies: action.payload,
      };
    case REPLIES_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case REPLIES_SET_POST_ID:
      return {
        ...state,
        postId: action.payload,
      };
    default:
      return state;
  }
};
