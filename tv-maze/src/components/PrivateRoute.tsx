import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useDispatch } from "react-redux";

import { retrieveShows } from "../service/redux/showsList.slice";
import { onValue, ref } from "firebase/database";
import { database } from "../service/firebase/firebase.init";
import { Container } from "@mui/material";

export const PrivateRoute = () => {
    const dispatch = useDispatch();
    const currentUser = useContext(AuthContext);
    const { uid } = currentUser;
    if (!!currentUser) {
        const userListofShows = ref(database, "users/" + uid );
            onValue(userListofShows, (snapshot) => {
                if(snapshot.exists()){
                    dispatch(retrieveShows(snapshot.val()));
                }
            });
        
        return <Container><Outlet /></Container>;
    }
    return <Navigate to="login" />;
};
