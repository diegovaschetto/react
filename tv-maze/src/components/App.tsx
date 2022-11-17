import { Login } from "./Login";
import { Home } from "./Home";
import { PrivateRoute } from "./PrivateRoute";

import { AuthProvider } from "./AuthProvider";


import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
    createRoutesFromElements,
  } from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <Navigate to={"/login"} />} />
            <Route path="*" element={ <Navigate to={"/login"} />} />
            <Route path="/login" element={ <Login/>} />
            <PrivateRoute component={Home} path={"/home"}/>
        </>
    )
)

function App() {
    
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>

    );
}

export default App;
