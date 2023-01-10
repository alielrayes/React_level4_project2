import {
  createTheme,
  Button,
  ThemeProvider,
  CssBaseline,
  Menu,
  MenuItem,
} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyTheme";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  const [isOpen, setisOpen] = useState(false);
  const closeMenu = () => {
    setisOpen(false)
  }


 
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBarr />
      <br />
      <br />
      <br />

      <div className="App">
        <Button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );

            setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
          }}
          variant="text"
          color="primary"
        >
          change theme
        </Button>

 

 
      </div>
    </ThemeProvider>
  );
}

export default App;
