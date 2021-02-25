import axios from 'axios';
import {
  USERS_LSIT_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
} from './constants';

export const listUsers = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: USERS_LSIT_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
      config
    );

    dispatch({
      type: USERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
