import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import InputControl from '../../../../components/Controls/InputControl';

export const AddressInformation = () => {
    return (
        <Box mt={8}>
            <Text mb={4} color={'gray.500'}>
                Address Information
            </Text>
            <SimpleGrid columns={1} spacing={3}>
                <SimpleGrid columns={2} spacing={3}>
                    <InputControl label='Street Address' placeholder='eg. 3884 Jail Drive' />
                    <InputControl label='Neighborhood' placeholder='eg. Longwood' />
                </SimpleGrid>

                <SimpleGrid columns={2} spacing={3}>
                    <InputControl label='City' placeholder='eg. Seattle' />
                    <InputControl label='State' placeholder='eg. Washington' />
                </SimpleGrid>

                <SimpleGrid columns={2} spacing={3}>
                    <InputControl label='Country' placeholder='eg. United States' />
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
};
