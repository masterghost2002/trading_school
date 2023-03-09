import React, { useState } from "react";
import {
    Flex,
    HStack,
    chakra,
    Box,
    IconButton,
    useColorMode,
    Link
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NavLinks from "./Components/NavLinks";
import { NavLink } from "react-router-dom";
import MobileDrawer from './Components/MobileDrawer';
import HeroLogo from "./Components/HeroLogo";
import { useSelector } from "react-redux";
function scroll_to_top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
export default function Navbar() {
    const navcolor = useSelector((state)=>state.color);
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
            position={navShadow ? 'sticky' : 'static'} 
            w='100%' top={navShadow ? 0 : 'auto'} 
            zIndex={3} 
            fontFamily={`'Montserrat', sans-serif`}
            backgroundColor={navcolor}
            >
            <Flex as="header"
                w="100%"
                px={[5,5,10,20]}
                py={['6', '4']}
                align="center"
                justify="space-between"
                boxShadow={navShadow ? 'lg' : 'none'}
            >
                

                {/* hero secttion */}
                <Link as={NavLink} to='/' _hover={{ border: '0px' }} onClick={scroll_to_top}>
                    <HeroLogo/>
                </Link>

                {/* links navigation */}
                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} bg='transparent' >
                    <NavLinks handleClick = {scroll_to_top} />
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
                    <MobileDrawer display={{ base: "flex", md: "none" }} bg='transparent' scroll_to_top = {scroll_to_top} />
                </HStack>
            </Flex>
        </chakra.header>
    );
}
