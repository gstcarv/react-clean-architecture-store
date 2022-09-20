import { Flex, Box, Image } from '@chakra-ui/react';
import { ProductInfo } from '../../../modules/product/domain/models/ProductInfo';
import AddToCartButton from './AddToCartButton';

type Props = {
    product: ProductInfo;
};

function ProductCard({ product }: Props) {
    return (
        <Box
            m={3}
            bg={'white'}
            width={{
                md: 250,
            }}
            h='390px'
            borderWidth='1px'
            rounded='lg'
            shadow='sm'
            position='relative'
            display='flex'
            flexDirection='column'
        >
            <Image
                src={product.photoUrl}
                alt={`Picture of ${product.name}`}
                roundedTop='lg'
                h={250}
                data-testid='productImage'
            />

            <Flex p='6' flex={1} alignItems='center' flexDirection={'row'} position='relative'>
                <Flex
                    fontSize='sm'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    data-testid='productName'
                    maxW={'70%'}
                    flexDirection='column'
                >
                    {product.name}

                    <Box fontSize='xl' color={'gray.800'} data-testid='productPrice' mt={2}>
                        <Box as='span' color={'gray.600'} fontSize='sm'>
                            R$
                        </Box>
                        {product.price.toFixed(2)}
                    </Box>
                </Flex>

                <AddToCartButton product={product} />
            </Flex>
        </Box>
    );
}

export { ProductCard };
