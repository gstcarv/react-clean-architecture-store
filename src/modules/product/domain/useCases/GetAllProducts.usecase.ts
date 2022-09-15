import { ProductInfo } from '../models/ProductInfo';

export abstract class GetAllProductsUC {
    abstract getAll: () => Promise<ProductInfo[]>;
}
