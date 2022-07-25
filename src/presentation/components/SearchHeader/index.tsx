import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {};

export default function SearchHeader({}: Props) {
    return (
        <Box mt={10}>
            <FormControl>
                <FormLabel>Github Profile</FormLabel>
                <Input placeholder="Enter user's id to get profile information" />
            </FormControl>

            <Button mt={4} colorScheme="teal" type="submit">
                Search Profile
            </Button>
        </Box>
    );
}
