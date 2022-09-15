import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './config/routes/AppRoutes';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <ChakraProvider>
            <CartProvider>
                <AppRoutes />
            </CartProvider>
        </ChakraProvider>
    );
}

export default App;
