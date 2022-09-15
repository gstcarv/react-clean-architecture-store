import { mock } from 'jest-mock-extended';
import { HttpClient } from '../../../../common/http/HttpClient';
import { ProductInfoMock } from '../../../../tests/mocks/models/product/ProductInfoMock';
import { ProductServerDataSource } from '../ProductServerDataSource';

describe('ProductServerDataSource', () => {
    let httpClient = mock<HttpClient>();

    let productServerDataSource: ProductServerDataSource;

    function setup() {
        productServerDataSource = new ProductServerDataSource(httpClient);
    }

    beforeEach(() => setup());

    describe('getAll', () => {
        test('it should get all products with success', async () => {
            httpClient.get.calledWith('/products').mockResolvedValue({
                data: {
                    products: ProductInfoMock.createList(),
                },
                statusCode: 200,
            });

            const result = await productServerDataSource.getAll();

            expect(result).toEqual(ProductInfoMock.createList());
        });
    });
});
