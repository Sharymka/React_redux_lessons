import { Button } from "@mui/material";

export default function BtnDeleteMessage({ deleteMessageList, children }) {
  return (
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: "rgb(197, 177, 216)",
        padding: "5px 7px",
        fontSize: "14px",
        marginTop: "10px",
      }}
      onClick={deleteMessageList}
      variant="contained"
      type="submit"
    >
      {children}
    </Button>
  );
}
