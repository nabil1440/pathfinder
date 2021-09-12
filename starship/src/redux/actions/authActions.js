import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from '../types';

const setAuthHeader = token => {
  localStorage.setItem('BearerToken', `Bearer ${token}`);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const loginUser = (credentials, history) => async dispatch => {
  try {
    const res = await axios.post('/login', credentials);
    dispatch({ type: LOGIN_USER });
    setAuthHeader(res.data.token);
    // Redirect the user to '/telemnetry'
    history.push('telemetry');
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    // Remove the token from localStorage
    localStorage.removeItem('BearerToken');
    // Remove it from axios header
    delete axios.defaults.headers.common['Authorization'];
    // Redirect user to '/
    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    console.log(err);
  }
};
