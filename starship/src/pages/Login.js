import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoginForm from '../components/LoginForm';

const Login = props => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ marginTop: '20vh' }}
    >
      <Grid item lg={2}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <LoginForm history={props.history} />
      </Grid>
    </Grid>
  );
};

export default Login;
