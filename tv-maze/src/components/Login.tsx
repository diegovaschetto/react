import { auth } from "../../firebase";
import { ui, uiConfig } from "../../firebase";

ui.start("#firebaseui-auth-container", uiConfig);

export const Login = () => {
    return (
        <>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container" ></div>
        </>
    );
};
