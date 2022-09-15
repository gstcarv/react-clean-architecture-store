import { ProductInfo } from '../../product/domain/models/ProductInfo';

export abstract class CartManager {
    abstract getAll(): ProductInfo[];

    abstract add(product: ProductInfo): ProductInfo[];

    abstract remove(product: ProductInfo): ProductInfo[];
}
