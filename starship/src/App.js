import './App.css';

import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Telemetry from './pages/Telemetry';
import AuthRoute from './utils/AuthRoute';
import GuestRoute from './utils/GuestRoute';
import { LOGIN_USER } from './redux/types';
import axios from 'axios';

import baseUrl from './utils/baseUrl';

// Handle the case when there is already a token in the localStorage
const token = localStorage.BearerToken;

if (token) {
  store.dispatch({ type: LOGIN_USER });
  axios.defaults.headers.common['Authorization'] = token;
}

axios.defaults.baseURL = baseUrl;

const App = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#00b096'
      },
      secondary: {
        main: '#f34e83'
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Paper square={true} style={{ minHeight: '100vh' }}>
        <Grid container>
          <Provider store={store}>
            <Router>
              <Switch>
                <GuestRoute exact path="/" component={Login} />
                <AuthRoute exact path="/telemetry" component={Telemetry} />
              </Switch>
            </Router>
          </Provider>
        </Grid>
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
