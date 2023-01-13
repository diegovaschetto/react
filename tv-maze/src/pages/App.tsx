import { AuthProvider } from "../components/AuthProvider";
import { Routing } from "../components/Routing";

function App() {
    return (
        <AuthProvider>
            <Routing />
        </AuthProvider>
    );
}

export default App;
