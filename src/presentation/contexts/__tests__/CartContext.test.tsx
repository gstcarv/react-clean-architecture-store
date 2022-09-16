import { renderHook } from '@testing-library/react';
import mock from 'jest-mock-extended/lib/Mock';
import { PropsWithChildren } from 'react';
import { act } from 'react-dom/test-utils';
import { CartManager } from '../../../modules/cart/domain/CartManager';
import { ProviderMock } from '../../../tests/mocks/presentation/hooks/ProviderMock';
import { ProductInfoMock } from '../../../tests/mocks/models/product/ProductInfoMock';
import { CartProvider, useCart } from '../CartContext';

describe('CartContext', () => {
    const CartContextProvider = ({ children }: PropsWithChildren) => <CartProvider>{children}</CartProvider>;

    let spyProvider: jest.SpyInstance;
    const cartManager = mock<CartManager>();

    function setup() {
        spyProvider = ProviderMock.use({ CartManager: cartManager });
    }

    beforeEach(() => setup());

    afterEach(() => spyProvider.mockRestore());

    test('It should load cart items from CartManagers', () => {
        cartManager.getAll.mockReturnValue(ProductInfoMock.createList());

        const cartContext = renderHook(() => useCart(), {
            wrapper: CartContextProvider,
        });

        expect(cartContext.result.current.cart).toHaveLength(3);
    });

    describe('addItem', () => {
        test('It should add a new item on the cart', () => {
            const itemToAdd = ProductInfoMock.create();

            cartManager.add.mockReturnValue([itemToAdd]);

            const cartContext = renderHook(() => useCart(), {
                wrapper: CartContextProvider,
            });

            act(() => cartContext.result.current.addItem(itemToAdd));

            expect(cartManager.add).toBeCalledWith(itemToAdd);
            expect(cartContext.result.current.cart).toHaveLength(1);
        });
    });

    describe('removeItem', () => {
        test('It should remove item from the cart', () => {
            const itemToRemove = ProductInfoMock.create();

            cartManager.getAll.mockReturnValue([itemToRemove]);
            ``;
            cartManager.remove.mockReturnValue([]);

            const cartContext = renderHook(() => useCart(), {
                wrapper: CartContextProvider,
            });

            act(() => cartContext.result.current.removeItem(itemToRemove));

            expect(cartManager.remove).toBeCalledWith(itemToRemove);
            expect(cartContext.result.current.cart).toHaveLength(0);
        });
    });
});
