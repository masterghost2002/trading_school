
import { useDisclosure, Flex, Button, VStack, HStack, Link } from "@chakra-ui/react";
import ModalMobile from "./ModalMobile";
import { RiMenu3Fill } from 'react-icons/ri';
import React from "react";
import NavLinks from "./NavLinks";
import { Socials } from "../../../assests/data";
export default function MobileDrawer({scroll_to_top}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(); 
    const handleClick = ()=>{
        onClose();
        scroll_to_top();
    }
    return (
        <Flex display={{ base: "flex", md: "none" }} >
            <Button ref={btnRef} onClick={onOpen} bg='transparent' aria-label="menu">
                <RiMenu3Fill size="26px" />
            </Button>
            <ModalMobile
                isOpen={isOpen}
                onClose={onClose}
            >
                <VStack spacing={10}>
                    <NavLinks handleClick={handleClick} />
                </VStack>
                <HStack justifyContent={'space-around'} py={5}>
                    {
                        Socials.map((social, index)=>
                            <Link key={index} href={social.to} isExternal fontSize={'24px'}>
                                {social.child}
                            </Link>
                        )
                    }
                </HStack>
            </ModalMobile>
        </Flex>
    );
};