import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../service/firebase/firebase.init";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
                    sx={{ justifyContent: { md: "space-around" }, bgcolor: "grey.300" }}
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
                    <BottomNavigationAction onClick={() => navigate(-1)} label="Back" icon={<ArrowBackIosNewIcon />} />
                    <BottomNavigationAction onClick={() => auth.signOut()} label="Exit" icon={<LogoutIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    );
};
