import { useContext } from "react";
import { colorModeServicesContext } from "../ThemeProvider";

export const useToggleModeServices = () => {
  const toggleMode = useContext(colorModeServicesContext);

  return toggleMode;
};
