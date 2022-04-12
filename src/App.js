import { ThemeContainer } from "./ThemeProvider";
import { CssBaseline } from "@mui/material";
import ProfileWeb from "./pages";
import "./i18n";

function App() {
  return (
    <ThemeContainer>
      <CssBaseline />
      <ProfileWeb />
    </ThemeContainer>
  );
}

export default App;
