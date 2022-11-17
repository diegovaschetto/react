import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute =({component: Home, ...rest}:any)=> {
    return(
        <AuthContext.Consumer>
            { (currentUser) => {
                if (currentUser) {
                    return (
                    <>
                        <Route {...rest} render={()=>(<Home/>)}/>
                    </>
                    )
                } else {
                    return (<><Route element={<Navigate to={"/login"}/>} /></>)
                }
            }
            }
        </AuthContext.Consumer>
    )
}