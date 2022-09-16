import '../../config/tests/setupTests';
import { render } from '@testing-library/react';
import BaseLayout from '.';
import { CartProvider } from '../../contexts/CartContext';

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
