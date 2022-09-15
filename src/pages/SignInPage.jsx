import { Typography, TextField, Box } from "@mui/material";
// import { Fragment } from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { fetchUserRegistration } from "../utilits";
import { getErrorAction } from "../actions/error_actions";
import { Link, useHistory, Link as RouteLink } from "react-router-dom";

export default function SignInPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector(getUser);
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: "rgb(160, 99, 169)",
          fontWeight: 700,
          textAlign: "center",
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
          //   onChange={onChangeEmail}
          name="email"
          //   value={registration.email}
          label="Email"
        />
        <TextField
          //   onChange={onChangePassword}
          name="password"
          type={"password"}
          //   value={registration.password}
          label="Password"
          autoComplete="unkown"
        />

        <Button
          className="btn_sign_in"
          variant="outlined"
          href="#outlined-buttons"
          type="submit"
          //   onClick={handleRegistration}
        >
          Auth
        </Button>
        <p>
          If you don't have an account,
          <Link to="/registration">registration</Link>
        </p>
      </Box>
    </>
  );
}
