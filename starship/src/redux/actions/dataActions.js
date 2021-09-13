import axios from 'axios';
// eslint-disable-next-line
import { GET_BULK, GET_ONE, ADD_NEW, UPDATE_ONE } from '../types';

export const getBulkData =
  (start = null, end = null, range = 30) =>
  async dispatch => {
    try {
      const res =
        !start && !end
          ? await axios.get(`/data/range?range=${range}`)
          : await axios.get(`/data/range?startDate=${start}&endDate=${end}`);
      dispatch({
        type: GET_BULK,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getOneDay = dateString => async dispatch => {
  try {
    const res = await axios.get(`/data/one?dateString=${dateString}`);
    dispatch({
      type: GET_ONE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNewData = data => async dispatch => {
  try {
    const res = await axios.post(`/data`, data);
    dispatch({ type: ADD_NEW, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateOne = (dateString, data) => async dispatch => {
  try {
    const res = await axios.put(`/data?date=${dateString}`, data);
    dispatch(getBulkData());
    dispatch({ type: UPDATE_ONE, payload: res.data });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
