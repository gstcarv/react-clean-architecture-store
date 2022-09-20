import '../../config/tests/setupTests';
import BaseLayout from '.';
import { CartProvider } from '../../contexts/CartContext';
import { render } from '../../config/tests';

describe('<BaseLayout />', () => {
    test('It should render', () => {
        const { getByText } = render(
            <CartProvider>
                <BaseLayout>mock-content</BaseLayout>
            </CartProvider>
        );

        expect(getByText('mock-content')).toBeInTheDocument();
    });
});
