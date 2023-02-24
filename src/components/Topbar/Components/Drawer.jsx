import React from 'react';
import {
  useColorMode, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";
const p = 15;
export default function DrawerExample({
    placement = "right",
    width,
    isOpen,
    children,
    onClose,
    btnRef,
    title = "Navigate To",
    footer,
  }) 
{
  const {colorMode} = useColorMode()
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center" borderRadius='0px 0px 12px 12px' backgroundColor={colorMode === 'dark' ? '#131516' : 'white'} >
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}