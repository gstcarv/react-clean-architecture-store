import { Module } from '../../lib/moduler/Module';
import { ProductServerDataSource } from './data/ProductServerDataSource';
import { ProductDataSource } from './domain/ProductDataSource';

@Module({
    providers: [{ provider: ProductDataSource, to: ProductServerDataSource }],
})
export class ProductModule {}
