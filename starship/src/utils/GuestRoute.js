import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Redux stuff
import { useSelector } from 'react-redux';

const GuestRoute = ({ component: Component, ...rest }) => {
  // Reading the auth state from the global state
  const { authenticated } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props => {
        if (!authenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/telemetry',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default GuestRoute;
