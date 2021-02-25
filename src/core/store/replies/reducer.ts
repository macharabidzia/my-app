import {
  REPLIES_LIST_REQUEST,
  REPLIES_LIST_SUCCESS,
  REPLIES_LIST_FAIL,
  ADD_REPLY,
} from './constants';
import { ISReplies } from './index.model';
const initialState: ISReplies = { loading: true, replies: [] };
export const repliesListReducer = (state = initialState, action: any) => {
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
    case ADD_REPLY:
      return {
        ...state,
        loading: false,
        replies: action.payload,
      };
    default:
      return state;
  }
};
