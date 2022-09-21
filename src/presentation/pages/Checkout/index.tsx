import { Box, Text } from '@chakra-ui/react';
import CheckoutForm from './CheckoutForm';
import { AddressInformation } from './CheckoutForm/AddressInformation';

const Checkout = () => {
    return (
        <Box pt={5}>
            <Text as={'h2'} fontSize='xx-large' fontWeight={'bold'} my={4}>
                Checkout
            </Text>

            <CheckoutForm />
        </Box>
    );
};

export default Checkout;
