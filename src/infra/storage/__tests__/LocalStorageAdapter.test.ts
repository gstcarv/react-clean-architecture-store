import { FakeLocalStorage } from '../../../tests/mocks/infra/storage/FakeLocalStorage';
import { LocalStorageAdapter } from '../LocalStorageAdapter';

describe('LocalStorageAdapter', () => {
    let fakeLocalStorage: FakeLocalStorage;

    let localStorageAdapter: LocalStorageAdapter;

    function setup() {
        fakeLocalStorage = new FakeLocalStorage();

        Storage.prototype.setItem = fakeLocalStorage.setItem.bind(fakeLocalStorage);
        Storage.prototype.getItem = fakeLocalStorage.getItem.bind(fakeLocalStorage);
        Storage.prototype.removeItem = fakeLocalStorage.removeItem.bind(fakeLocalStorage);

        localStorageAdapter = new LocalStorageAdapter();
    }

    beforeEach(() => setup());

    describe('setItem', () => {
        test('it should save item on localStorage', async () => {
            const toSave = { foo: 'bar' };

            localStorageAdapter.setItem('mock-key', toSave);

            expect(fakeLocalStorage.storage['mock-key']).toBe(JSON.stringify(toSave));
        });
    });

    describe('getItem', () => {
        test('it return saved data on key from localStorage', async () => {
            const toSave = { foo: 'bar' };

            localStorageAdapter.setItem('mock-key', toSave);

            expect(localStorageAdapter.getItem<typeof toSave>('mock-key')!.foo).toBe(toSave.foo);
        });
    });

    describe('removeItem', () => {
        test('it should remove key from localStorage', async () => {
            const toSave = { foo: 'bar' };

            localStorageAdapter.setItem('mock-key', toSave);

            localStorageAdapter.removeItem('mock-key');

            expect(localStorageAdapter.getItem('mock-key')).toBeNull();
        });
    });
});
