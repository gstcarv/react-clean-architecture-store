import { Box, Button, Flex, Text, ButtonGroup } from '@chakra-ui/react';
import { BsCreditCard, BsPaypal } from 'react-icons/bs';
import { SiGooglepay } from 'react-icons/si';

const PaymentMethodSelector = () => {
    return (
        <Box mb={4}>
            <Text mb={4} color={'gray.500'}>
                Select Payment Method
            </Text>
            <ButtonGroup>
                <Button variant={'outline'} leftIcon={<BsCreditCard />}>
                    Credit Card
                </Button>
                <Button variant={'outline'} leftIcon={<SiGooglepay size={25} />}>
                    Google Pay
                </Button>
                <Button variant={'outline'} leftIcon={<BsPaypal />}>
                    Paypal
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default PaymentMethodSelector;
