import userEvent from '@testing-library/user-event';
import { mock } from 'jest-mock-extended';
import { CartContextType } from '../../../../contexts/CartContext';
import * as CartContext from '../../../../contexts/CartContext';
import { render } from '../../../../config/tests';
import { ProductInfoMock } from '../../../../../tests/mocks/models/product/ProductInfoMock';
import CartMenu from '.';
import { waitFor } from '@testing-library/react';

const mockOnNavigate = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockOnNavigate,
}));

describe('<CartMenu />', () => {
    const cartContext = mock<CartContextType>();

    let spyUseCart: jest.SpyInstance<CartContextType>;

    function setup() {
        spyUseCart?.mockRestore();

        spyUseCart = jest.spyOn(CartContext, 'useCart').mockReturnValue(cartContext);
    }

    beforeEach(() => setup());

    test('it should render all cart items correctly', async () => {
        cartContext.cart = ProductInfoMock.createList();

        const { getAllByTestId } = render(<CartMenu />);

        expect(getAllByTestId('cartItem')).toHaveLength(3);
    });

    test('it should navigate to checkout page on click Go To Checkout button', async () => {
        cartContext.cart = ProductInfoMock.createList();

        const { getByText } = render(<CartMenu />);

        const goToCheckout = getByText('Go to checkout');

        userEvent.click(goToCheckout);

        await waitFor(() => {
            expect(mockOnNavigate).toBeCalledWith('/checkout');
        });
    });

    test('it should show empty message if cart is empty', async () => {
        cartContext.cart = [];

        const { getByText } = render(<CartMenu />);

        expect(getByText('Your cart is empty')).toBeInTheDocument();
    });
});
