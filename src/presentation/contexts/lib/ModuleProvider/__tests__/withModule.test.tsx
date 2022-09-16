import { setup } from '../withModule';
import { useProvider } from '../../../../hooks/lib/useProvider';
import { render } from '@testing-library/react';
import '../../../../../modules/AppModule';
import { ProductDataSource } from '../../../../../modules/product/domain/ProductDataSource';
import { ProductModule } from '../../../../../modules/product/ProductModule';

describe('useProvider', () => {
    test('setup should wrap component within a module', () => {
        let productDataSource: ProductDataSource;

        const MockComponent = () => {
            const provider = useProvider(ProductDataSource);
            productDataSource = provider;
            return null;
        };

        const WrapperComponent = setup(ProductModule)(MockComponent);

        render(<WrapperComponent />);

        expect(productDataSource!.getAll).toBeInstanceOf(Function);
    });
});
