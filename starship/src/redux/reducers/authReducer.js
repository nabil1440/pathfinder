import { LOGIN_USER, LOGOUT_USER } from '../types';

const initialState = {
  authenticated: false,
  user: {}
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    default:
      return { ...state };
  }
}
