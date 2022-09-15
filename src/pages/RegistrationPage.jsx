import { Typography, TextField, Box } from "@mui/material";
// import { Fragment } from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { fetchUserRegistration } from "../utilits";
import { getErrorAction } from "../actions/error_actions";
import { Link, useHistory } from "react-router-dom";

export default function RegistrationPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [registration, setRegistration] = useState({ password: "", email: "" });

  const onChangePassword = (event) => {
    setRegistration({ ...registration, password: event.target.value });
  };
  const onChangeEmail = (event) => {
    setRegistration({ ...registration, email: event.target.value });
  };

  const handleRegistration = async () => {
    try {
      await fetchUserRegistration(registration);
      history.push("/chat/1");
    } catch (error) {
      dispatch(getErrorAction(error.message));
      console.log("ошибка", error.message);
    }
  };

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
          value={registration.email}
          label="Email"
        />
        <TextField
          onChange={onChangePassword}
          name="password"
          type={"password"}
          value={registration.password}
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
          If you've already had an account,
          <Link to="/sign-in">sign in</Link>
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
