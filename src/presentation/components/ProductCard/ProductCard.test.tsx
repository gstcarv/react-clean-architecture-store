import { ProductCard } from '.';
import { ProductInfoMock } from '../../../tests/mocks/models/product/ProductInfoMock';
import { render } from '../../config/tests';
import { CartProvider } from '../../contexts/CartContext';

describe('<ProductCard />', () => {
    test('it should render all product information correctly', () => {
        const product = ProductInfoMock.create({
            price: 4.99,
            name: 'product-name',
        });

        const { getByTestId } = render(
            <CartProvider>
                <ProductCard product={product} />
            </CartProvider>
        );

        expect(getByTestId('productImage').getAttribute('src')).toBe(product.photoUrl);
        expect(getByTestId('productName').textContent).toContain('product-name');
        expect(getByTestId('productPrice').textContent).toContain('R$4.99');
    });
});
