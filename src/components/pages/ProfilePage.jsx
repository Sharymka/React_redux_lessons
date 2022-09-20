import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useEffect } from "react";
import { store } from "../store/index";
import "../style.css";

export default function ProfilePage() {
  const { getState, dispatch, subscribe } = store;

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      console.info(getState());
    });

    return unsubscribe;
  }, [getState, subscribe]);

  const handleChange = (event) => {
    let check = event.target.checked;
    let value = event.target.value;
    dispatch({ type: { value: value, check: check } });
  };

  return (
    <div className="checkbox container">
      <FormControlLabel
        control={
          <Checkbox onClick={handleChange} name="language" value="english" />
        }
        label="English"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="language" value="russian" />
        }
        label="Russian"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="language" value="french" />
        }
        label="French"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="language" value="german" />
        }
        label="German"
      />
    </div>
  );
}
