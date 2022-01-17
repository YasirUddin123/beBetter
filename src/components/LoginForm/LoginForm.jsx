import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
            <TextField label="Username" variant="outlined" type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}/>
        </label>
      </div>
      <div>
        <label htmlFor="password">
            <TextField label="Password" variant="outlined"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
