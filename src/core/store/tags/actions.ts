import axios from 'axios';
import {
  TAGS_LIST_REQUEST,
  TAGS_LIST_SUCCESS,
  TAGS_LIST_FAIL,
  ADD_TAG,
} from './constants';

export const listTags = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: TAGS_LIST_REQUEST,
    });
    const config = {
      headers: {},
    };
    const { data } = await axios.get('tags.json', config);

    dispatch({
      type: TAGS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAGS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addTag = (data: any[]) => (dispatch: any, getState: any) => {
  const {
    tags: { tags },
  } = getState();
  dispatch({
    type: ADD_TAG,
    payload: [...tags, ...data],
  });
};
