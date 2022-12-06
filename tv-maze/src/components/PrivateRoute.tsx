import { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useDispatch } from "react-redux";

import { retrieveShows } from "../service/redux/showsList.slice";
import { onValue, ref } from "firebase/database";
import { database } from "../service/firebase/firebase.init";
import {
  Container,
  createTheme,
  IconButton,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { NavigationMenu } from "./NavigationMenu";



export const PrivateRoute = () => {
  const dispatch = useDispatch();
  const currentUser = useContext(AuthContext);

  if (!!currentUser) {
    const { uid } = currentUser;
    const userListofShows = ref(database, "users/" + uid);
    onValue(userListofShows, (snapshot) => {
      if (snapshot.exists()) {
        dispatch(retrieveShows(snapshot.val()));
      }
    });

    return (
      
        <Container
          sx={{ bgcolor: "background.default", m: 0, pb:"100px" }}
          className="!max-w-none min-h-screen"
        >
          <NavigationMenu />
          <Outlet />
        </Container>
     
    );
  }
  return <Navigate to="login" />;
};
