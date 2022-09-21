import { Box, Text } from '@chakra-ui/react';

const CheckoutTotal = () => {
    return (
        <Box float='right' textAlign={'right'}>
            <Text color={'gray.500'}>Total Price</Text>
            <Text fontWeight={'bold'} fontSize={'xl'}>
                R$ 20,00
            </Text>
        </Box>
    );
};

export default CheckoutTotal;
