import { Provider } from '../../../lib/injector/Provider';
import { ProductInfo } from '../../product/domain/models/ProductInfo';
import { CartManager } from '../domain/CartManager';
import { LocalCartStore } from './LocalCartStore';

@Provider()
export class CartManagerImpl implements CartManager {
    constructor(private localCartStore: LocalCartStore) {}

    getAll(): ProductInfo[] {
        return this.localCartStore.getAll();
    }

    add(product: ProductInfo) {
        this.localCartStore.add(product);

        return this.getAll();
    }

    remove(product: ProductInfo) {
        this.localCartStore.remove(product);

        return this.getAll();
    }
}
