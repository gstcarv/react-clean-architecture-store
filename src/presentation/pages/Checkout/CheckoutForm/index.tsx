import { Box, Button } from '@chakra-ui/react';
import { AddressInformation } from './AddressInformation';
import { CreditCardInformation } from './CreditCardInformation';
import PaymentMethodSelector from './PaymentMethodSelector';

const CheckoutForm = () => {
    return (
        <Box>
            <PaymentMethodSelector />

            <AddressInformation />

            <CreditCardInformation />

            <Button colorScheme={'blue'} size={'lg'} my={8}>
                Finish checkout
            </Button>
        </Box>
    );
};

export default CheckoutForm;
