import { Box, Text } from "@chakra-ui/react";

type Props = {
    title: string;
    children: string;
};

export default function InformationLabel({ title, children }: Props) {
    return (
        <Box mt={5}>
            <Text fontSize="sm" fontWeight={"bold"}>
                {title}
            </Text>
            <Text fontSize="lg">{children || "-"}</Text>
        </Box>
    );
}
