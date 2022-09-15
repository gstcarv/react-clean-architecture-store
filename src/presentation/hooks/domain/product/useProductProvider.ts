import { ProductDataSource } from '../../../../modules/product/domain/ProductDataSource';
import { useProvider } from '../../lib/useProvider';

export const useProductDataSource = () => useProvider(ProductDataSource);
