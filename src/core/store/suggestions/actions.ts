import axios from 'axios';
import {
  SUGGESTIONS_LIST_REQUEST,
  SUGGESTIONS_LIST_SUCCESS,
  SUGGESTIONS_LIST_FAIL,
} from './constants';

export const listSuggestions = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: SUGGESTIONS_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get('suggestions.json', config);

    dispatch({
      type: SUGGESTIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUGGESTIONS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
