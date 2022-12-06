import { Login } from "./Login";
import { Home } from "./Home";
import { DetailsPage } from "./DetailsPage";
import { FavouritesPage } from "./FavouritesPage";

import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";

import { AuthProvider } from "../components/AuthProvider";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import {
  Route,
  Navigate,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { useMemo, useState } from "react";
import { createTheme, IconButton, PaletteMode, ThemeProvider } from "@mui/material";

function App() {
  
  const [modeTheme, setModeTheme] = useState<PaletteMode>("light");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modeTheme,
        },
      }),
    [modeTheme]
  );

  const toggleColorMode = () => {
    setModeTheme((prevMode: string) =>
      prevMode === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
       <IconButton onClick={toggleColorMode} color="inherit" className="!absolute">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon color="action" />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path=":search" element={<Home />} />
            <Route path="details/:id" element={<DetailsPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
     </ThemeProvider>
  );
}

export default App;
