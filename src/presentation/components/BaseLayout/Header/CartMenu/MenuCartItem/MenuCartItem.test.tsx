import userEvent from '@testing-library/user-event';
import mock from 'jest-mock-extended/lib/Mock';
import { CartContextType } from '../../../../../contexts/CartContext';
import * as CartContext from '../../../../../contexts/CartContext';
import { render } from '../../../../../config/tests';
import { ProductInfoMock } from '../../../../../../tests/mocks/models/product/ProductInfoMock';
import MenuCartItem from '.';
import { PropsWithChildren } from 'react';
import { waitFor } from '@testing-library/react';

jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    MenuItem: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

describe('<MenuCartItem />', () => {
    const cartContext = mock<CartContextType>();

    let spyCartContext: jest.SpyInstance<CartContextType>;

    function setup() {
        spyCartContext = jest.spyOn(CartContext, 'useCart').mockReturnValue(cartContext);
    }

    beforeEach(() => setup());

    afterEach(() => spyCartContext.mockRestore());

    test('it should render product cart item data correctly', async () => {
        const product = ProductInfoMock.create({
            price: 4.99,
            name: 'product-name',
        });

        const { getByTestId } = render(<MenuCartItem product={product} />);

        expect(getByTestId('productImage').getAttribute('src')).toBe(product.photoUrl);
        expect(getByTestId('productName').textContent).toContain('product-name');
        expect(getByTestId('productPrice').textContent).toContain('R$ 4.99');
    });

    test('it should delete item from cart on click delete icon', async () => {
        const product = ProductInfoMock.create();

        const { getByLabelText } = render(<MenuCartItem product={product} />);

        const deleteButton = getByLabelText('Delete product from cart');

        userEvent.click(deleteButton);

        await waitFor(() => {
            expect(cartContext.removeItem).toBeCalledWith(product);
        });
    });
});
