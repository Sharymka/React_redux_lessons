
export default function MessageInput({ value, onChange }) {
  return (
    <input
      data-testid='inputMessage'
      className="mui-input"
      required
      onChange={(event) => onChange(event.target.value)}
      value={value}
      id="standard-basic"
      label="Message"
      placeholder="Your message must be here"
    />
  );
}
