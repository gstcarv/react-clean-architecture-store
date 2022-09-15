import { mock, MockProxy } from 'jest-mock-extended';
import { Storage } from '../../../../common/storage/Storage';
import { ProductInfoMock } from '../../../../tests/mocks/models/product/ProductInfoMock';
import { ProductInfo } from '../../../product/domain/models/ProductInfo';
import { LocalCartStore, LocalCartStoreImpl } from '../LocalCartStore';

describe('LocalCartStore', () => {
    let storage: MockProxy<Storage>;

    let localCartStore: LocalCartStoreImpl;

    function setup() {
        storage = mock<Storage>();

        localCartStore = new LocalCartStoreImpl(storage);
    }

    beforeAll(() => setup());

    const product = ProductInfoMock.create();

    const product2 = ProductInfoMock.create({ id: 'mock-id-2' });

    describe('add', () => {
        test('it should add a new item on the cart', () => {
            localCartStore.add(product);
            localCartStore.add(product2);

            expect(storage.setItem).toHaveBeenCalled();
            expect(localCartStore.items).toHaveLength(2);
        });
    });

    describe('remove', () => {
        test('it should add a new item on the cart', () => {
            localCartStore.remove(product);
            localCartStore.remove(product2);

            expect(storage.setItem).toHaveBeenCalled();
            expect(localCartStore.items).toHaveLength(0);
        });
    });

    describe('getAll', () => {
        test('it should load items from local storage', () => {
            storage.getItem.mockReturnValueOnce([product, product2]);

            const allProducts = localCartStore.getAll();

            expect(storage.getItem).toHaveBeenCalled();
            expect(allProducts).toEqual([product, product2]);
            expect(localCartStore.items).toEqual([product, product2]);
        });
    });
});
