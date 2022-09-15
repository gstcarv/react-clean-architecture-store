import { Flex, Box, Image, Icon, chakra } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
};

function ProductCard() {
    return (
        <Box m={3} bg={'white'} w='250px' borderWidth='1px' rounded='lg' shadow='sm' position='relative'>
            <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop='lg' h={250} />

            <Box p='6'>
                <Flex mt='1' justifyContent='space-between' alignContent='center'>
                    <Box fontSize='lg' fontWeight='semibold' as='h4' lineHeight='tight'>
                        {data.name}

                        <Box fontSize='lg' color={'gray.800'}>
                            <Box as='span' color={'gray.600'} fontSize='lg'>
                                R$
                            </Box>
                            {data.price.toFixed(2)}
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
