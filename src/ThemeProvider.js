import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = React.createContext();
export function ThemeContainer({ children }) {
  const [mode, setMode] = React.useState("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Arial",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              html: {
                scrollBehavior: "smooth",
              },
            },
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "rgba(0,0,0)" },
              }
            : {
                primary: { main: "#ffffff" },
              }),
          secondary: { main: "#00B0FF", contrastText: "#fff" },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
