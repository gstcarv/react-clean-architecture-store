import { Box, Flex, Avatar, Button, Menu, MenuButton, Stack } from '@chakra-ui/react';

import CartMenu from './CartMenu';

export const Header = () => {
    return (
        <>
            <Box
                borderBottom={1}
                borderStyle={'solid'}
                borderColor='gray.200'
                px={10}
                position='fixed'
                zIndex={99}
                width={'100%'}
                bg='white'
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <CartMenu />

                            <Menu>
                                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/adventurer-neutral/hell.svg'}
                                    />
                                </MenuButton>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            <Box height={'64px'} />
        </>
    );
};
