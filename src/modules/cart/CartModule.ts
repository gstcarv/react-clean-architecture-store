import { Module } from '../../lib/moduler/Module';
import { CartManagerImpl } from './data/CartManagerImpl';
import { LocalCartStore, LocalCartStoreImpl } from './data/LocalCartStore';
import { CartManager } from './domain/CartManager';

@Module({
    providers: [
        { provider: LocalCartStore, to: LocalCartStoreImpl },
        { provider: CartManager, to: CartManagerImpl },
    ],
})
export class CartModule {}
