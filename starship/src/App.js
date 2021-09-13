import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Telemetry from './pages/Telemetry';
import AuthRoute from './utils/AuthRoute';
import GuestRoute from './utils/GuestRoute';
import { LOGIN_USER } from './redux/types';
import axios from 'axios';

// Handle the case when there is already a token in the localStorage
const token = localStorage.BearerToken;

if (token) {
  store.dispatch({ type: LOGIN_USER });
  axios.defaults.headers.common['Authorization'] = token;
}

axios.defaults.baseURL = 'http://localhost:5000';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <GuestRoute exact path="/" component={Login} />
          <AuthRoute exact path="/telemetry" component={Telemetry} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
