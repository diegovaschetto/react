import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../service/firebase.init";

interface PropType {
    children: React.ReactNode
}

export const AuthContext = createContext<any>(false);

export const AuthProvider = (prop: PropType) => {


    const [currentUser, setCurrentUser] = useState<any>(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => { setCurrentUser(user); console.log(user) }
        );
    }, [])
    return (<>
        <AuthContext.Provider value={currentUser}>
            {prop.children}
        </AuthContext.Provider>
    </>);
};
