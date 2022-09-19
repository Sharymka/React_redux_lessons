import { Button } from '@mui/material';

export default function BtnSendMessage({ children }) {
  return (
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: 'rgb(197, 177, 216)',
        padding: '10px 15px',
        fontSize: '14px',
        marginTop: '10px',
      }}
      variant="contained"
      type="submit"
    >
      {children}
    </Button>
  );
}
