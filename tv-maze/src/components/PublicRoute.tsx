import { Container } from "@mui/material";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PublicRoute = () => {
    const currentUser = useContext(AuthContext);
    if (!currentUser) {
        return <Outlet />;
    }
    return <Navigate to="home" />;
};
