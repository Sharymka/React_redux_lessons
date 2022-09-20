import { Button } from "@mui/material";

export default function BtnAddChat({ children, onClick }) {
  return (
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: "rgb(197, 177, 216)",
        padding: "10px 15px",
        fontSize: "14px",
        marginTop: "10px",
        color: "white",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
