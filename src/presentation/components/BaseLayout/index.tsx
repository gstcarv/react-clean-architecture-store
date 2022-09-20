import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';

type Props = { children: ReactNode };

export default function BaseLayout({ children }: Props) {
    return (
        <Box minHeight={'100vh'}>
            <Header />
            <Box minHeight={'90vh'} background='gray.50' paddingX={{ md: '10%' }}>
                {children}
            </Box>
        </Box>
    );
}
