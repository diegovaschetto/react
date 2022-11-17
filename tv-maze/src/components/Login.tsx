import { useEffect } from "react";
import { ui, uiConfig } from "../service/firebase.auth";

export const Login = () => {
    useEffect(() => {
        ui.start("#firebaseui-auth-container", uiConfig);
        return () => { ui.reset() }
    }, [])

    return (
        <>
            <div id="firebaseui-auth-container" ></div>
        </>
    );
};
