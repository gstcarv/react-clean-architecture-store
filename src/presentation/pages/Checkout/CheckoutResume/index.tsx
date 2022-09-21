import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import CartItemInformation from '../../../components/CartItemInformation';
import { useCart } from '../../../contexts/CartContext';
import CheckoutTotal from './CheckoutTotal';

type Props = {};

const CheckoutResume = (props: Props) => {
    const { cart } = useCart();

    return (
        <Box>
            {cart.map((product) => (
                <Flex mb={7}>
                    <CartItemInformation product={product} />
                </Flex>
            ))}

            <Divider mb={4} />

            <CheckoutTotal />
        </Box>
    );
};

export default CheckoutResume;
