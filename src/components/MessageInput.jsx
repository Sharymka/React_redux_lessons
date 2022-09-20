import { TextField } from "@mui/material";

export default function MessageInput({ value, onChange }) {
  return (
    <TextField
      className="mui-input"
      required
      onChange={(event) => onChange(event.target.value)}
      value={value}
      id="standard-basic"
      label="Message"
      variant="standard"
      placeholder="Your message must be here"
    />
  );
}
