import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Button, Typography, TextField, Box,
} from '@mui/material';

import '../App.css';
import { getErrorAction } from '../actions/error_actions';
import { fetchUserRegistration } from '../utils';

export default function RegistrationPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ password: '', email: '' });

  const onChangePassword = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const onChangeEmail = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };

  const handleRegistration = async () => {
    try {
      const user = await fetchUserRegistration(credentials);
      console.log('credentials', credentials);

      console.log('user', user);

      history.push('/sign-in');
    } catch (error) {
      dispatch(getErrorAction(error.message));
      console.log('ошибка', error.message);
    }
  };

  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: 'rgb(160, 99, 169)',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Registration
      </Typography>

      <Box
        className="form_sign_in container"
        // onSubmit={handleSubmit}
        component="form"
      >
        <TextField
          onChange={onChangeEmail}
          name="email"
          value={credentials.email}
          label="Email"
        />
        <TextField
          onChange={onChangePassword}
          name="password"
          type="password"
          value={credentials.password}
          label="Password"
          autoComplete="unkown"
        />

        <Button
          className="btn_sign_in"
          variant="outlined"
          href="#outlined-buttons"
          type="submit"
          onClick={handleRegistration}
        >
          Auth
        </Button>
        <p>
          If you &apos; already had an account,
          <Link  to="/sign-in">sign in</Link>
        </p>
      </Box>
    </>

  // <>
  //   <Box>
  //
  //     <Button variant="outlined" color="primary" href="#outlined-buttons">
  //       Link
  //     </Button>
  //   </Box>

  //   <Divider sx={{ mt: "16px", mb: "8px" }} />

  //   <Typography variant="body1" sx={{ textAlign: "center" }}>
  //     If you don't have an account,
  //     <Link>register</Link>
  //   </Typography>
  //   <Box />
  // </>
  );
}
