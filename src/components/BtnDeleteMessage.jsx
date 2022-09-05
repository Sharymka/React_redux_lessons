import { Button } from "@mui/material";

export default function BtnDeleteMessage({ messageId, onClick, children }) {
  return (
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: "rgb(197, 177, 216)",
        padding: "3px 4px",
        width: "160px",
        fontSize: "12px",
        marginTop: "10px",
      }}
      onClick={() => onClick(messageId)}
      variant="contained"
      type="submit"
    >
      {children}
    </Button>
  );
}
