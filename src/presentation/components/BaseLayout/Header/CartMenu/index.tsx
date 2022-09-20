import { Menu, MenuButton, Button, MenuList, Box, Text } from '@chakra-ui/react';
import { BsCartFill } from 'react-icons/bs';
import { useCart } from '../../../../contexts/CartContext';
import MenuCartItem from './MenuCartItem';
import { BsBasket } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CartMenu() {
    const cartContext = useCart();

    const navigate = useNavigate();

    function handleGoToCheckout() {
        navigate('/checkout');
    }

    return (
        <Menu>
            <MenuButton as={Button} role='button' aria-label='Open cart menu'>
                <BsCartFill />
            </MenuButton>

            <MenuList width={{ md: '400px' }} overflowX={'auto'}>
                <Box overflow='scroll' height='450px'>
                    {cartContext.cart.length === 0 && (
                        <Text textAlign={'center'} mt={10} color={'gray.500'}>
                            Your cart is empty
                        </Text>
                    )}

                    {cartContext.cart.map((p) => (
                        <MenuCartItem product={p} key={p.id} />
                    ))}
                </Box>

                <Box p={3}>
                    <Button
                        width={'100%'}
                        colorScheme='blue'
                        leftIcon={<BsBasket />}
                        onClick={handleGoToCheckout}
                        role='button'
                    >
                        Go to checkout
                    </Button>
                </Box>
            </MenuList>
        </Menu>
    );
}

export default CartMenu;
