import { Provider } from '../../../lib/injector/Provider';
import { ProductInfo } from '../../product/domain/models/ProductInfo';
import { CartManager } from '../domain/CartManager';

export abstract class LocalCartStore extends CartManager {}

@Provider()
export class LocalCartStoreImpl implements LocalCartStore {
    items: ProductInfo[] = [];

    add(product: ProductInfo): ProductInfo[] {
        this.items = [...this.items, product];
        return this.items;
    }

    remove(product: ProductInfo): ProductInfo[] {
        this.items = this.items.filter((p) => p.id !== product.id);
        return this.items;
    }

    getAll(): ProductInfo[] {
        return this.items;
    }
}
