import { mock, MockProxy } from 'jest-mock-extended';
import { Storage } from '../../../../common/storage/Storage';
import { ProductInfoMock } from '../../../../tests/mocks/models/product/ProductInfoMock';
import { CartManagerImpl } from '../CartManagerImpl';
import { LocalCartStore, LocalCartStoreImpl } from '../LocalCartStore';

describe('CartManagerImpl', () => {
    let localCartStore: MockProxy<LocalCartStore>;

    let cartManager: CartManagerImpl;

    function setup() {
        localCartStore = mock<LocalCartStore>();

        cartManager = new CartManagerImpl(localCartStore);
    }

    beforeEach(() => setup());

    const productMock = ProductInfoMock.create();

    describe('add', () => {
        test('it should add item on local cart', () => {
            cartManager.add(productMock);

            expect(localCartStore.add).toHaveBeenCalledWith(productMock);
        });
    });

    describe('remove', () => {
        test('it should remove item from local cart', () => {
            cartManager.remove(productMock);

            expect(localCartStore.remove).toHaveBeenCalledWith(productMock);
        });
    });

    describe('getAll', () => {
        test('it get all items from local cart', () => {
            cartManager.getAll();

            expect(localCartStore.getAll).toHaveBeenCalledWith();
        });
    });
});
