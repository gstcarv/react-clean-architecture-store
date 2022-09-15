import { ProductInfo } from '../../../../modules/product/domain/models/ProductInfo';

export class ProductInfoMock {
    static create(product?: Partial<ProductInfo>): ProductInfo {
        return {
            id: 'mock-product-id',
            name: 'mock-name',
            photoUrl: 'mock-photo-url',
            price: 10,
            ...product,
        };
    }
}
