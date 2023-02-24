import React, { useState } from "react";
import {
    Flex,
    HStack,
    chakra,
    useColorMode,
    Box,
    IconButton,
    Text,
    Link
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NavLinks from "./Components/NavLinks";
import MobileDrawer from './Components/MobileDrawer';
import { TopBarData } from "../../assests/data";
export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [navShadow, setNavShadow] = useState(false);

    window.onscroll = function () {
        //dynamically get the top-badge height to net navbar shadow
        const ele = document.getElementById('top-badge');
        if (window.pageYOffset > ele.offsetHeight && navShadow === false)
            setNavShadow(true);
        else if (window.pageYOffset < ele.offsetHeight && navShadow === true)
            setNavShadow(false);

    }


    return (
        <chakra.header 
            id="header" 
            position={navShadow ? 'sticky' : 'static'} 
            w='100%' top={navShadow ? 0 : 'auto'} 
            zIndex={3} 
            fontFamily={`'Montserrat', sans-serif`}
            backgroundColor={ !navShadow?(colorMode === 'dark'?'#131516':'white'):'transparent' }
            >
            <Flex as="header"
                w="100%"
                px="6"
                py={['6', '4']}
                align="center"
                justify="space-between"
                boxShadow={navShadow ? 'lg' : 'none'}
            >
                

                {/* hero secttion */}
                <Link  _hover={{ border: '0px' }}>
                    <HeroSection />
                </Link>

                {/* links navigation */}
                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} bg='transparent' >
                    <NavLinks />
                </HStack>


                <HStack>
                    <Box >
                        <IconButton
                            bg='transparent'
                            icon={colorMode === 'light' ? <MoonIcon style={{fontSize:'25px'}} /> : <SunIcon color='yellow.300' style={{fontSize:'25px'}} />}
                            onClick={toggleColorMode}
                            aria-label="themeSwitcher"
                        />
                    </Box>
                    <MobileDrawer display={{ base: "flex", md: "none" }} bg='transparent' />
                </HStack>
            </Flex>
        </chakra.header>
    );
}
const HeroSection = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <HStack display={{ base: 'flex', md: 'flex' }} fontWeight={600} fontSize={{base:'2xl', md:'30px'}}>
                <Text
                    color='blue.500'
                >
                    {TopBarData.NavBar.HeroLg.first}
                </Text>
                <Text
                    color={colorMode === 'light' ? 'black' : 'white'}
                >
                    {TopBarData.NavBar.HeroLg.second}
                </Text>
            </HStack>
        </>
    )
}