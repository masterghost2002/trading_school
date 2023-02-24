
import { useDisclosure, Flex,  Button, VStack} from "@chakra-ui/react";
import Drawer from './Drawer';
import { RiMenu3Fill } from 'react-icons/ri';
import React from "react";
import NavLinks from "./NavLinks";
export default function MobileDrawer() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(); return (
        <Flex display={{ base: "flex", md: "none" }} >
            <Button ref={btnRef} onClick={onOpen} bg='transparent' aria-label="menu">
                <RiMenu3Fill size="26px"  />
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="center" fontSize='20px'>
                        <NavLinks onClose={onClose}/>
                </VStack>
            </Drawer>
        </Flex>
    );
};