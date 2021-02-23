import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_FAIL,
  COMMENTS_LIST_CLEAR,
} from './constants';

const initialState = { loading: true, comments: [] };

export const commentsListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMMENTS_LIST_REQUEST:
      return { ...state, loading: true };
    case COMMENTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.data,
        postId: action.payload.postId,
      };
    case COMMENTS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case COMMENTS_LIST_CLEAR:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
