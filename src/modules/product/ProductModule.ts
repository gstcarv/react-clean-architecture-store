import { Module } from '../../lib/moduler/Module';
import { CartModule } from '../cart/CartModule';
import { ProductServerDataSource } from './data/ProductServerDataSource';
import { ProductDataSource } from './domain/ProductDataSource';

@Module({
    providers: [{ provider: ProductDataSource, to: ProductServerDataSource }],
    merge: [CartModule],
})
export class ProductModule {}
