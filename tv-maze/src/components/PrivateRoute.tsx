import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useDispatch } from "react-redux";

import { retrieveShows, watchingShows } from "../service/redux/showsList.slice";
import { onValue, ref } from "firebase/database";
import { database } from "../service/firebase/firebase.init";

export const PrivateRoute = () => {
    const dispatch = useDispatch();
    const currentUser = useContext(AuthContext);

    if (!!currentUser) {
        const { uid } = currentUser;

        const userListofShows = ref(database, "users/" + uid);
        const userListofWatching = ref(database, "watching/" + uid);
        onValue(userListofShows, (snapshot) => {
            if (snapshot.exists()) {
                dispatch(retrieveShows(snapshot.val()));
            }
        });

        onValue(userListofWatching, (snapshot) => {
            if (snapshot.exists()) {
                dispatch(watchingShows(snapshot.val()));
            }
        });

        return <Outlet />;
    }
    return <Navigate to="login" />;
};
