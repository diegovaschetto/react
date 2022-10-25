import { InputForm } from "./components/InputForm";

import { Routes, Route, Link } from "react-router-dom";
import { Results } from "./pages/Results";
import { Result } from "./pages/Result";

const App = () => {

    return (
        <>
            <Routes>
                <Route index element={<InputForm />}></Route>
                <Route path="/:results" element={<Results />}>
                </Route>
                    <Route path="/result/:result" element={<Result />}></Route>

            </Routes>
        </>
    );
};

export default App;
