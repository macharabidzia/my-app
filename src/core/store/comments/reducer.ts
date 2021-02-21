import {
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  COMMENTS_LIST_FAIL,
} from './constants';

export const commentsListReducer = (
  state = { loading: true, comments: [] },
  action: any
) => {
  switch (action.type) {
    case COMMENTS_LIST_REQUEST:
      return { loading: true };
    case COMMENTS_LIST_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      };
    case COMMENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
