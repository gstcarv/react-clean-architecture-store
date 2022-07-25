import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function BaseLayout({ children }: Props) {
    return (
        <Box height={"100vh"} background="gray.50" paddingStart={"20%"} paddingEnd={"20%"}>
            {children}
        </Box>
    );
}
