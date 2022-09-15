import { Flex, Box, Image, Icon, chakra } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { ProductInfo } from '../../../modules/product/domain/models/ProductInfo';

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
                    <chakra.a href={'#'} display={'flex'}>
                        <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
                    </chakra.a>
                </Flex>
            </Box>
        </Box>
    );
}

export { ProductCard };
