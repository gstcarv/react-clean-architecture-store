import { Flex } from '@chakra-ui/react';
import { ProductInfo } from '../../../modules/product/domain/models/ProductInfo';
import { ProductModule } from '../../../modules/product/ProductModule';
import { ProductCard } from '../../components/ProductCard';
import withModule from '../../contexts/lib/ModuleProvider/withModule';
import { useProducts } from '../../hooks/domain/product/useProduct';

const withProductsModule = withModule(ProductModule);

const StoreProducts = () => {
    const { data: products } = useProducts();

    return (
        <Flex wrap='wrap' pt={5}>
            {products?.map((p) => (
                <ProductCard product={p} key={p.id} />
            ))}
        </Flex>
    );
};

export default withProductsModule(StoreProducts);
