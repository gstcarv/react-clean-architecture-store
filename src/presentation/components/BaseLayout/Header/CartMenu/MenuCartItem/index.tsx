import { MenuItem, Image, Text, Box, Flex } from '@chakra-ui/react';
import { useCart } from '../../../../../contexts/CartContext';
import { Icon, chakra } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { ProductInfo } from '../../../../../../modules/product/domain/models/ProductInfo';

type Props = {
    product: ProductInfo;
};

function MenuCartItem({ product, product: { name, photoUrl, price } }: Props) {
    const cartContext = useCart();

    function handleDeleteFromCart() {
        cartContext.removeItem(product);
    }

    return (
        <MenuItem h='130px' data-testid='cartItem'>
            <Image
                boxSize={'80px'}
                borderRadius={'lg'}
                src={photoUrl}
                alt={name}
                mr={'12px'}
                data-testid={'productImage'}
            />
            <Flex width={'100%'}>
                <Box width={'90%'}>
                    <Text data-testid={'productName'}>{name}</Text>
                    <Text fontWeight={'bold'} fontSize={'lg'} data-testid={'productPrice'}>
                        R$ {price.toFixed(2)}
                    </Text>
                </Box>

                <Flex alignItems={'center'} width='10%'>
                    <chakra.a
                        cursor={'pointer'}
                        display={'flex'}
                        role='button'
                        aria-label='Delete product from cart'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            handleDeleteFromCart();
                        }}
                    >
                        <Icon as={FiTrash} h={5} w={5} alignSelf={'center'} />
                    </chakra.a>
                </Flex>
            </Flex>
        </MenuItem>
    );
}

export default MenuCartItem;
