import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <TextField label="Username" variant="outlined"
          type="text"
          name="username"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <TextField label="Password" variant="outlined"
          type="password"
          name="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)} />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Create Account" />
      </div>
    </form>
  );
}

export default RegisterForm;
