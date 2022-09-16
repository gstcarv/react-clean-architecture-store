import { mock } from 'jest-mock-extended';
import StoreProducts from '.';
import { ProductInfoMock } from '../../../tests/mocks/models/product/ProductInfoMock';
import { render } from '../../config/tests';
import { CartProvider } from '../../contexts/CartContext';
import * as ProductHooks from '../../hooks/domain/product/useProduct';

describe('<StoreProducts />', () => {
    const mockUseProducts = mock<ReturnType<typeof ProductHooks.useProducts>>();
    let spyUseProducts: jest.SpyInstance<typeof mockUseProducts>;

    function setup() {
        spyUseProducts = jest.spyOn(ProductHooks, 'useProducts').mockReturnValue(mockUseProducts);
    }

    beforeEach(() => setup());

    afterEach(() => spyUseProducts.mockRestore());

    test('it should fetch and render all products', () => {
        mockUseProducts.data = ProductInfoMock.createList();

        const { getAllByTestId } = render(
            <CartProvider>
                <StoreProducts></StoreProducts>
            </CartProvider>
        );

        expect(getAllByTestId('productImage')).toHaveLength(mockUseProducts.data.length);
    });
});
