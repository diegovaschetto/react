import { Login } from "./Login";
import { Home } from "./Home";
import { DetailsPage } from "./DetailsPage";
import { FavouritesPage } from "./FavouritesPage";

import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";

import { AuthProvider } from "../components/AuthProvider";

import { Route, Navigate, Routes, BrowserRouter as Router } from "react-router-dom";
import { Theme } from "../components/Theme";


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route element={<Theme />}>
                          <Route path="home" element={<Home />} />
                          <Route path="favourites" element={<FavouritesPage />} />
                          <Route path=":search" element={<Home />} />
                          <Route path="details/:id" element={<DetailsPage />} />
                        </Route>
                    </Route>
                    <Route element={<PublicRoute />}>
                        <Route path="/" element={<Navigate to="login" />} />
                        <Route path="*" element={<Navigate to="login" />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
