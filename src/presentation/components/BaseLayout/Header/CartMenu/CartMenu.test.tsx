import { mock } from 'jest-mock-extended';
import { CartContextType } from '../../../../contexts/CartContext';
import * as CartContext from '../../../../contexts/CartContext';
import { render } from '../../../../config/tests';
import { ProductInfoMock } from '../../../../../tests/mocks/models/product/ProductInfoMock';
import CartMenu from '.';

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
});
