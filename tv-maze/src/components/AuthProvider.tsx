import React, { createContext } from "react";

interface PropType {
    children : React.ReactNode
}

const AuthContext = createContext(false);

export const AuthProvider = (prop : PropType) => {
    return <><AuthContext.Provider value={}>
            {prop.children}
    </AuthContext.Provider>
    </>;
};
