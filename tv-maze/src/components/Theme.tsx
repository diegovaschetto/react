import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useMemo, useState } from "react";
import { Container, createTheme, IconButton, PaletteMode, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Theme = () => {
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
        setModeTheme((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{ bgcolor: "background.default", m: 0, pb: "100px" }}
                    className="!max-w-none min-h-screen"
                >
                    <IconButton onClick={toggleColorMode} color="inherit" className="pb-6">
                        {theme.palette.mode === "dark" ? <Brightness7Icon color="action" /> : <Brightness4Icon />}
                    </IconButton>
                    <Outlet />
                </Container>
            </ThemeProvider>
        </>
    );
};
