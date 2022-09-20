import { IconButton } from "@mui/material";
import { useToggleModeServices } from "./hooks/UseToggleModeServices";
import { useTheme } from "@emotion/react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function BtnChangeTheme() {
  const toggleColorMode = useToggleModeServices();
  const theme = useTheme();
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      onClick={toggleColorMode}
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon></Brightness7Icon>
      ) : (
        <Brightness4Icon></Brightness4Icon>
      )}
    </IconButton>
  );
}
