import { Avatar, Box, Text } from "@chakra-ui/react";

type Props = {};

export default function ProfileInformation({}: Props) {
    return (
        <Box mt={10}>
            <Avatar name="Profile" src="https://github.com/gstcarv.png" size={"2xl"} />

            <Box mt={5}>
                <Text fontSize="sm" fontWeight={"bold"}>
                    Name
                </Text>
                <Text fontSize="lg">Gustavo Carvalho</Text>
            </Box>

            <Box mt={5}>
                <Text fontSize="sm" fontWeight={"bold"}>
                    Company
                </Text>
                <Text fontSize="lg">Gustavo Carvalho</Text>
            </Box>

            <Box mt={5}>
                <Text fontSize="sm" fontWeight={"bold"}>
                    Location
                </Text>
                <Text fontSize="lg">Gustavo Carvalho</Text>
            </Box>

            <Box mt={5}>
                <Text fontSize="sm" fontWeight={"bold"}>
                    Blog
                </Text>
                <Text fontSize="lg">Gustavo Carvalho</Text>
            </Box>
        </Box>
    );
}
