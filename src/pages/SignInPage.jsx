import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { fetchUserAction } from '../actions';
import '../App.css';
import { usePrevious } from '../hooks/usePrevious';
import { getUser } from '../store/userReducer/selector';
import { useSelector } from 'react-redux';
// import { Header } from '../components/Header';


export default function SignInPage() {
  const history = useHistory();
  const user = useSelector(getUser);
  const prevUserValue = usePrevious(user);

  const [credentials, setCredentials] = useState({ password: '', email: '' });

    useEffect(() => {
      console.log('use effect in SignIn ', prevUserValue);
      console.log('use effect in SignIn ', user);

      if (user.token && !prevUserValue?.token) {
        history.push('/chat1');
        
      }
    }, [user, history, prevUserValue]);

  const onChangePassword = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };

  const onChangeEmail = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };

  const handleSignIn = () => {
    console.log('credentials', credentials);
    fetchUserAction(credentials);
    history.push('/chat1');

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
        Sign in
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
          onClick={handleSignIn}
        >
          Auth
        </Button>
        <p>
          If you don&apos;t have an account,
          <Link to="/registration">registration</Link>
        </p>
      </Box>
    </>
  );
}
