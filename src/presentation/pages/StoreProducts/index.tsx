import { Box, Flex } from '@chakra-ui/react';
import { ProductCard } from '../../components/ProductCard';

const StoreProducts = () => {
    return (
        <Flex wrap='wrap' pt={5}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Flex>
    );
};

export default StoreProducts;
