import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../service/firebase/firebase.init";
import { CircularProgress } from "@mui/material";

interface PropType {
    children: React.ReactNode;
}

interface CurrentUser {
    uid: string;
}

export const AuthContext = createContext<Partial<CurrentUser>>({});

export const AuthProvider = (prop: PropType) => {
    const [currentUser, setCurrentUser] = useState<Partial<CurrentUser>>({});
    const [pending, setPending] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user!);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <CircularProgress className="absolute top-1/2 left-1/2" />;
    }

    return (
        <>
            <AuthContext.Provider value={currentUser}>{prop.children}</AuthContext.Provider>
        </>
    );
};
