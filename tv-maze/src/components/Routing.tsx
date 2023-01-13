import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { NowWatching } from "../pages/NowWatching";
import { NavigationMenu } from "../components/NavigationMenu";
import { FavouritesPage } from "../pages/FavouritesPage";
import { DetailsPage } from "../pages/DetailsPage";

import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";
import { Route, Navigate, Routes, BrowserRouter as Router } from "react-router-dom";
import { Theme } from "../components/Theme";

export const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route element={<Theme />}>
                            <Route element={<NavigationMenu />}>
                                <Route path="home" element={<Home />} />
                                <Route path="favourites" element={<FavouritesPage />} />
                                <Route path=":search" element={<Home />} />
                                <Route path="details/:id" element={<DetailsPage />} />
                                <Route path="watching" element={<NowWatching />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route element={<PublicRoute />}>
                        <Route element={<Theme />}>
                            <Route path="/" element={<Navigate to="login" />} />
                            <Route path="*" element={<Navigate to="login" />} />
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
};
