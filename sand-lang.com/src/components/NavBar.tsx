import { useColorMode, Flex, Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/core';
import React from 'react'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
        
    const { toggleColorMode } = useColorMode()

    return (
        <>
        <Flex backgroundColor='rgb(52, 60, 75)' p={4} >
                <Menu>
                    <MenuButton>
                      Actions
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Post</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onClick={toggleColorMode}>Toggle Dark Mode</MenuItem>
                    
                    </MenuList>
                </Menu>
                <Box ml={"auto"}>
                    test
                </Box>
                
        </Flex>
        </>
    );
}