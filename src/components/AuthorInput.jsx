import { TextField } from '@mui/material';

export default function AuthorInput({ value, onChange }) {
  return (
    <TextField
      required
      className="mui-input"
      onChange={(event) => onChange(event.target.value)}
      value={value}
      id="standard-basic"
      label="Author"
      variant="standard"
      placeholder="Your name must be here"
    />
  );
}
