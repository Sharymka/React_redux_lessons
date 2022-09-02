import { Button } from "@mui/material";

export default function BtnSendMessage(props) {
  return (
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: "rgb(197, 177, 216)",
        padding: "18px 36px",
        fontSize: "18px",
        marginTop: "10px",
      }}
      variant="contained"
      type="submit"
    >
      {props.children}
    </Button>
  );
}
