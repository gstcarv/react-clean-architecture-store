import { Flex, Box, Image } from '@chakra-ui/react';
import { ProductInfo } from '../../../modules/product/domain/models/ProductInfo';
import AddToCartButton from './AddToCartButton';

type Props = {
    product: ProductInfo;
};

function ProductCard({ product }: Props) {
    return (
        <Box m={3} bg={'white'} w='250px' borderWidth='1px' rounded='lg' shadow='sm' position='relative'>
            <Image src={product.photoUrl} alt={`Picture of ${product.name}`} roundedTop='lg' h={250} />

            <Box p='6'>
                <Flex mt='1' justifyContent='space-between' alignContent='center'>
                    <Box fontSize='lg' fontWeight='semibold' as='h4' lineHeight='tight'>
                        {product.name}

                        <Box fontSize='lg' color={'gray.800'}>
                            <Box as='span' color={'gray.600'} fontSize='lg'>
                                R$
                            </Box>
                            {product.price.toFixed(2)}
                        </Box>
                    </Box>

                    <AddToCartButton product={product} />
                </Flex>
            </Box>
        </Box>
    );
}

export { ProductCard };
