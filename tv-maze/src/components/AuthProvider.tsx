import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../service/firebase/firebase.init";

interface PropType {
    children: React.ReactNode;
}

export const AuthContext = createContext<any>({});

export const AuthProvider = (prop: PropType) => {
    const [currentUser, setCurrentUser] = useState<any>({});
    const [pending, setPending] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <div>loading</div>;
    }

    return (
        <>
            <AuthContext.Provider value={currentUser}>{prop.children}</AuthContext.Provider>
        </>
    );
};
