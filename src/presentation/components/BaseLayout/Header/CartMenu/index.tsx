import { Menu, MenuButton, Button, MenuList } from '@chakra-ui/react';
import { BsCartFill } from 'react-icons/bs';
import { useCart } from '../../../../contexts/CartContext';
import MenuCartItem from './MenuCartItem';

function CartMenu() {
    const cartContext = useCart();

    return (
        <Menu>
            <MenuButton as={Button} disabled={cartContext.cart.length === 0}>
                <BsCartFill />
            </MenuButton>

            {cartContext.cart.length > 0 && (
                <MenuList width={'400px'} maxHeight='90vh' overflowX={'auto'}>
                    {cartContext.cart.map((p) => (
                        <MenuCartItem product={p} key={p.id} />
                    ))}
                </MenuList>
            )}
        </Menu>
    );
}

export default CartMenu;
