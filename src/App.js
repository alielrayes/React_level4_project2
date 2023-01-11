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

} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useRef, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#9A2555' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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

      <AppBarr />
      <br />
      <br />
      <br />








      <Grid container spacing={2} disableEqualOverflow>
      
        <Grid xs={12} sm={6} md={12}>
          <Item sx={{bgcolor:     {md:  "teal"  }     }}>...</Item>
        </Grid>

        <Grid xs={12} sm={6} md={12}>
          <Item>...</Item>
        </Grid>




        <Grid xs={12} sm={6} md={12}>
          <Item>xs=4</Item>
        </Grid>

        <Grid xs={12} sm={6} md={12}>
          <Item>xs=8</Item>
        </Grid>

      </Grid>













      <br />
      <br />
      <br />

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
    </ThemeProvider>
  );
}

export default App;
