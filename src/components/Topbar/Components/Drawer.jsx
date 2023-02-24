import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";
const p = 15;
export default function DrawerExample({
  placement = "bottom",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Navigate To",
  footer,
}) {
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center" borderRadius = '12px 12px 0px 0px' >
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