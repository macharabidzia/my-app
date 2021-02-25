import {
  SUGGESTIONS_LIST_REQUEST,
  SUGGESTIONS_LIST_SUCCESS,
  SUGGESTIONS_LIST_FAIL,
} from './constants';

export const suggestionsReducer = (
  state = { loading: true, suggestions: [] },
  action: any
) => {
  switch (action.type) {
    case SUGGESTIONS_LIST_REQUEST:
      return { ...state, loading: true };
    case SUGGESTIONS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        suggestions: action.payload,
      };
    case SUGGESTIONS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
