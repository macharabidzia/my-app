import {
  TAGS_LIST_REQUEST,
  TAGS_LIST_SUCCESS,
  TAGS_LIST_FAIL,
  ADD_TAG,
} from './constants';

export const tagsReducer = (
  state = { loading: true, tags: [] },
  action: any
) => {
  switch (action.type) {
    case TAGS_LIST_REQUEST:
      return { ...state, loading: true };
    case TAGS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };
    case TAGS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_TAG:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };
    default:
      return state;
  }
};
