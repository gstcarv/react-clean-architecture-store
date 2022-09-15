import { Storage, StorageItem } from '../../common/storage/Storage';
import { Provider } from '../../lib/injector/Provider';

@Provider()
export class LocalStorageAdapter implements Storage {
    getItem<T extends StorageItem>(key: string): T | null {
        const item = localStorage.getItem(key);

        if (!item) return null;

        return JSON.parse(item);
    }

    setItem(key: string, item: StorageItem): void {
        const itemToStore = JSON.stringify(item);
        localStorage.setItem(key, itemToStore);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
