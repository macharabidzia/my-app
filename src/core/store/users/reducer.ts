import {
  USERS_LSIT_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
} from './constants';

export const usersReducer = (
  state = { loading: true, users: [] },
  action: any
) => {
  switch (action.type) {
    case USERS_LSIT_REQUEST:
      return { ...state, loading: true };
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USERS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
