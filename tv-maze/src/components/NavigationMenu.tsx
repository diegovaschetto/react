import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../service/firebase/firebase.init";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export const NavigationMenu = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <Paper
                elevation={16}
                sx={{
                    width: 1,
                    position: "fixed",
                    bottom: { xs: 0 },
                    left: 0,
                    zIndex: 5,
                }}
            >
                <BottomNavigation
                    sx={{
                        justifyContent: { md: "space-around" },
                        bgcolor: "background.default",
                    }}
                    showLabels
                    value={value}
                    onChange={(_event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={() => navigate("home")} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction
                        onClick={() => navigate("favourites")}
                        label="Favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigate("watching")}
                        label="Watching"
                        icon={<RemoveRedEyeIcon />}
                    />
                    <BottomNavigationAction onClick={() => auth.signOut()} label="Exit" icon={<LogoutIcon />} />
                </BottomNavigation>
            </Paper>
            <Outlet />
        </>
    );
};
