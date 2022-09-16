import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { CartModule } from '../../modules/cart/CartModule';
import { CartManager } from '../../modules/cart/domain/CartManager';
import { ProductInfo } from '../../modules/product/domain/models/ProductInfo';
import { useProvider } from '../hooks/lib/useProvider';

export type CartContextType = {
    cart: ProductInfo[];
    addItem: (product: ProductInfo) => void;
    removeItem: (product: ProductInfo) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const Provider = (props: PropsWithChildren) => {
    const [cart, setCart] = useState<ProductInfo[]>([]);
    const cartManager = useProvider(CartManager, CartModule);

    useEffect(() => setCart(cartManager.getAll()), [cartManager]);

    return (
        <CartContext.Provider
            value={{
                addItem: (p) => setCart(cartManager.add(p)),
                removeItem: (p) => setCart(cartManager.remove(p)),
                cart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export const CartProvider = Provider;

export const useCart = () => useContext(CartContext);
