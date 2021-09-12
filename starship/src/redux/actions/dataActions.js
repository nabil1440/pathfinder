import axios from 'axios';
import { GET_BULK, GET_ONE, UPDATE_ONE } from '../types';

export const getBulkData =
  (start = null, end = null, range = 30) =>
  async dispatch => {
    try {
      const res = await axios.get('/route/to/bulk');
      dispatch({
        type: GET_BULK,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getOneDay = ISOString => async dispatch => {
  try {
    const res = await axios.get('/route/to/one');
    dispatch({
      type: GET_ONE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateOne = data => async dispatch => {
  try {
    const res = await axios.put('/route/to/update', data);
    dispatch({ type: UPDATE_ONE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
