import userEvent from '@testing-library/user-event';
import mock, { mockFn } from 'jest-mock-extended/lib/Mock';
import AddToCartButton from '.';
import { ProductInfoMock } from '../../../../tests/mocks/models/product/ProductInfoMock';
import { render } from '../../../config/tests';
import { CartContextType } from '../../../contexts/CartContext';
import * as CartContext from '../../../contexts/CartContext';
import { waitFor } from '@testing-library/react';
import * as Chakra from '@chakra-ui/react';

const mockUseToast = mockFn<ReturnType<typeof Chakra.useToast>>();

jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    useToast: () => mockUseToast,
}));

describe('<AddToCartButton />', () => {
    const mockUseCart = mock<CartContextType>();

    function setup() {
        jest.spyOn(CartContext, 'useCart').mockReturnValue(mockUseCart);
    }

    beforeEach(() => setup());

    afterEach(() => jest.restoreAllMocks());

    test('it should add item to cart', async () => {
        const product = ProductInfoMock.create();

        mockUseCart.cart = [];

        const { getByRole, getByTestId } = render(<AddToCartButton product={product} />);

        const addToCardButton = getByRole('link');

        expect(getByTestId('addCartIcon')).toBeTruthy();

        userEvent.click(addToCardButton);

        await waitFor(() => {
            expect(mockUseCart.addItem).toBeCalledWith(product);
            expect(mockUseToast).toHaveBeenCalledWith({
                title: 'Product added to the card',
                description: 'Your product was added to the card',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        });
    });

    test('it should remove item from cart', async () => {
        const product = ProductInfoMock.create();

        mockUseCart.cart = [product];

        const { getByRole, getByTestId } = render(<AddToCartButton product={product} />);

        const removeFromCartButton = getByRole('link');

        expect(getByTestId('removeCartIcon')).toBeTruthy();

        userEvent.click(removeFromCartButton);

        await waitFor(() => {
            expect(mockUseCart.removeItem).toBeCalledWith(product);
            expect(mockUseToast).toHaveBeenCalledWith({
                title: 'Product removed from the card',
                description: 'Your product was removed from the card',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        });
    });
});
