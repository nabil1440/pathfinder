import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

const initialState = {};
const middlewares = [thunk];

const reducers = combineReducers({
  auth: authReducer,
  data: dataReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, initialState, enhancer);

export default store;
