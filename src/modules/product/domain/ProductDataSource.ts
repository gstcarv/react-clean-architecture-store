import { ProductInfo } from './models/ProductInfo';
import { GetAllProductsUC } from './useCases/GetAllProducts.usecase';

export abstract class ProductDataSource implements GetAllProductsUC {
    abstract getAll: () => Promise<ProductInfo[]>;
}
