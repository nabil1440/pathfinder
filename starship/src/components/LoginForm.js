import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { loginUser } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const LoginForm = props => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const login = (credentials, history) =>
    dispatch(loginUser(credentials, history));

  const handleSubmit = e => {
    e.preventDefault();
    login({ name, password }, props.history);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        style={{ marginBottom: 10 }}
        label="Name"
      />
      <TextField
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        style={{ marginBottom: 10 }}
        label="Password"
      />

      <Button fullWidth type="submit" variant="contained" color="secondary">
        LOGIN
      </Button>
    </form>
  );
};

export default LoginForm;
