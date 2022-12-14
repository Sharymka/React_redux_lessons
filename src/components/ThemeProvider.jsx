import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useState, useMemo, createContext, useCallback } from "react";
import { deepmerge } from "@mui/utils";
export const colorModeServicesContext = createContext(undefined);

export default function ThemeProvider({
  initialMode = "light",
  initialTheme,
  children,
}) {
  const [mode, setMode] = useState(initialMode);

  const theme = useMemo(() => {
    return createTheme(deepmerge(initialTheme, { palette: { mode } }));
  }, [mode, initialTheme]);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  return (
    <colorModeServicesContext.Provider value={toggleColorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </colorModeServicesContext.Provider>
  );
}
