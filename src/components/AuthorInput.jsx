import { TextField } from "@mui/material";

export default function AuthorInput({ value, onChange }) {
  return (
    <TextField
      required
      className="mui-input"
      onChange={onChange}
      value={value}
      id="standard-basic"
      label="Author"
      variant="standard"
      placeholder="Your name must be here"
    />
  );
}
