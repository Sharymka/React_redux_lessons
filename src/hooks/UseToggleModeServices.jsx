import { useContext } from "react";
import { colorModeServicesContext } from "../components/ThemeProvider";

export const useToggleModeServices = () => {
  const toggleMode = useContext(colorModeServicesContext);

  return toggleMode;
};
