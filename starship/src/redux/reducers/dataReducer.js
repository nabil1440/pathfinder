import { GET_BULK, GET_ONE, UPDATE_ONE } from '../types';

const initialState = {
  days: [],
  oneDay: {}
};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BULK:
      return { ...state };
    case GET_ONE:
      return { ...state };
    case UPDATE_ONE:
      return { ...state };
    default:
      return { ...state };
  }
}
