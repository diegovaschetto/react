import { InputForm } from "./components/InputForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Results } from "./pages/Results";
import { Result } from "./pages/Result";

const router = createBrowserRouter([
    {
        path: "/",
        element: <InputForm />,
    },
    {
        path: "/:results",
        element: <Results />,
    },
    {
        path: ":results/:result",
        element: <Result />,
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
