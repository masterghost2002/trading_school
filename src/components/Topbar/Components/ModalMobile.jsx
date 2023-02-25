import {Modal, ModalOverlay, ModalContent,ModalHeader, ModalCloseButton, ModalBody, useColorModeValue } from "@chakra-ui/react";
import HeroLogo from "./HeroLogo";
export default function ModalMobile({ isOpen, onClose, children }) {
    return (
      <>  
        <Modal isOpen={isOpen} onClose={onClose} size='full' >
          <ModalOverlay />
          <ModalContent backgroundColor={useColorModeValue('white', '#131516')}>
            <ModalHeader><HeroLogo/></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }