import { HttpClient } from '../../../common/http/HttpClient';
import { Provider } from '../../../lib/injector/Provider';
import { ProductInfo } from '../domain/models/ProductInfo';
import { ProductDataSource } from '../domain/ProductDataSource';

type ProductListResponse = {
    products: ProductInfo[];
};

@Provider()
export class ProductServerDataSource implements ProductDataSource {
    constructor(private httpClient: HttpClient) {}

    async getAll() {
        const products = await this.httpClient.get<ProductListResponse>('/products');
        return products.data.products;
    }
}
