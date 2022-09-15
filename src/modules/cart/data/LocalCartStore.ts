import { Storage } from '../../../common/storage/Storage';
import { Provider } from '../../../lib/injector/Provider';
import { ProductInfo } from '../../product/domain/models/ProductInfo';
import { CartManager } from '../domain/CartManager';

export abstract class LocalCartStore extends CartManager {}

const CART_STORE_KEY = 'cart';

@Provider()
export class LocalCartStoreImpl implements LocalCartStore {
    constructor(private storage: Storage) {}

    items: ProductInfo[] = [];

    add(product: ProductInfo): ProductInfo[] {
        this.items = [...this.items, product];

        this.updateStorage();

        return this.items;
    }

    remove(product: ProductInfo): ProductInfo[] {
        this.items = this.items.filter((p) => p.id !== product.id);

        this.updateStorage();

        return this.items;
    }

    getAll(): ProductInfo[] {
        this.items = this.storage.getItem<ProductInfo[]>(CART_STORE_KEY) || [];

        return this.items;
    }

    private updateStorage() {
        this.storage.setItem(CART_STORE_KEY, this.items);
    }
}
