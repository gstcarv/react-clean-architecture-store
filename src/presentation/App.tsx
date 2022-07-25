import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./config/routes/AppRoutes";

function App() {
    return (
        <ChakraProvider>
            <AppRoutes />
        </ChakraProvider>
    );
}

export default App;
