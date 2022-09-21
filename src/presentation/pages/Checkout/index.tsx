import { Box, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import CheckoutForm from './CheckoutForm';
import CheckoutResume from './CheckoutResume';

const Checkout = () => {
    return (
        <Box pt={5}>
            <Text as={'h2'} fontSize='xx-large' fontWeight={'bold'} my={4}>
                Checkout
            </Text>

            <Grid templateColumns='repeat(8, 1fr)' gap={20}>
                <GridItem colSpan={5}>
                    <CheckoutForm />
                </GridItem>
                <GridItem colSpan={3}>
                    <CheckoutResume />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Checkout;
