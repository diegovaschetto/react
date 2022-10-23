import { InputForm } from "./components/InputForm";

import { Routes, Route, Link } from "react-router-dom";
import { Results } from "./pages/Results";

const App = () => {

    return (
        <>
            <InputForm />
            <Routes>
                <Route path="/:results" element={<Results />}></Route>
            </Routes>
        </>
    );
};

export default App;
