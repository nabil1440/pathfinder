import { GET_BULK, GET_ONE, LOGOUT_USER, ADD_NEW, UPDATE_ONE } from '../types';

const initialState = {
  days: [],
  oneDay: {}
};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BULK:
      return { ...state, days: payload };
    case GET_ONE:
      return { ...state, oneDay: payload || {} };
    case ADD_NEW:
      return { ...state, days: [...state.days, payload.day] };
    case UPDATE_ONE:
      return { ...state, oneDay: payload };
    case LOGOUT_USER:
      return { ...state, days: [], oneDay: {} };
    default:
      return { ...state };
  }
}
