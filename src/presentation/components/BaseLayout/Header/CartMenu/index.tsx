import { Menu, MenuButton, Button, MenuList, MenuItem, Image, MenuIcon, Text, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { useCart } from '../../../../contexts/CartContext';
import { Icon, chakra, useToast } from '@chakra-ui/react';
import { FiShoppingCart, FiTrash } from 'react-icons/fi';
import { ProductInfo } from '../../../../../modules/product/domain/models/ProductInfo';

type Props = {};

function CartMenu({}: Props) {
    const cartContext = useCart();

    function handleDeleteFromCart(product: ProductInfo) {
        cartContext.removeItem(product);
    }

    return (
        <Menu>
            <MenuButton as={Button} disabled={cartContext.cart.length === 0}>
                <BsCartFill />
            </MenuButton>

            {cartContext.cart.length > 0 && (
                <MenuList width={'400px'} maxHeight='90vh' overflowX={'auto'}>
                    {cartContext.cart.map((p) => (
                        <MenuItem h='130px' key={p.id}>
                            <Image
                                boxSize={'80px'}
                                borderRadius={'lg'}
                                src={p.photoUrl}
                                alt={'Fluffybuns the destroyer'}
                                mr={'12px'}
                            />
                            <Flex width={'100%'}>
                                <Box width={'90%'}>
                                    <Text>{p.name}</Text>
                                    <Text fontWeight={'bold'} fontSize={'lg'}>
                                        R$ {p.price.toFixed(2)}
                                    </Text>
                                </Box>

                                <Flex alignItems={'center'} width='10%'>
                                    <chakra.a cursor={'pointer'} display={'flex'}>
                                        <Icon
                                            as={FiTrash}
                                            h={5}
                                            w={5}
                                            alignSelf={'center'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                handleDeleteFromCart(p);
                                            }}
                                        />
                                    </chakra.a>
                                </Flex>
                            </Flex>
                        </MenuItem>
                    ))}
                </MenuList>
            )}
        </Menu>
    );
}

export default CartMenu;
