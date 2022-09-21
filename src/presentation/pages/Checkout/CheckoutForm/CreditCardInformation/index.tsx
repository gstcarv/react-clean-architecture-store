import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import InputControl from '../../../../components/Controls/InputControl';

export const CreditCardInformation = () => {
    return (
        <Box mt={8}>
            <Text mb={4} color={'gray.500'}>
                Credit Card Information
            </Text>
            <SimpleGrid columns={1} spacing={3}>
                <SimpleGrid columns={1} spacing={3}>
                    <InputControl label='Card Number' placeholder='0000.0000.0000.0000' />
                </SimpleGrid>

                <SimpleGrid columns={3} spacing={3}>
                    <InputControl label='Owner Name' placeholder='John Doe' />
                    <InputControl label='Expiration Date' placeholder='MM/YY' />
                    <InputControl label='CVV' placeholder='000' />
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
};
