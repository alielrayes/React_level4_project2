import {
  createTheme,
  Button,
  ThemeProvider,
  CssBaseline,
  Menu,
  MenuItem,
  Typography,
  Stack,
  Divider,
  styled,
  Paper,
  Box,
} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import Grid from "@mui/material/Unstable_Grid2";
import MyList from "components/List";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#9A2555" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<Box className={theme.palette.mode}>
  
        <AppBarr />
  
        <Stack sx={{ flexDirection: "row" }}>
          <MyList setmyMOde={setmyMOde} theme={theme} />
  
          <Typography
            sx={{ flexGrow: "3", height: "1111px" }}
            className="border mycolor"
            variant="h1"
          >
            box 2
          </Typography>
          <Typography sx={{ flexGrow: "2" }} className="border" variant="h6">
            box 3
          </Typography>
        </Stack>
</Box>
    </ThemeProvider>
  );
}

export default App;
