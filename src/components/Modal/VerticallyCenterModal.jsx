import { Modal, ModalBody, ModalHeader, ModalOverlay, ModalCloseButton, ModalContent,ModalFooter, Button, HStack} from "@chakra-ui/react";

export default function VerticallyCenterModal({hfs,isOpen, bg, onClose, children, heading, footer}) {
    return (
      <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent backgroundColor={bg}>
          <ModalHeader fontSize={hfs}>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <HStack justifyContent={'space-between'} width={'100%'}>
            {footer}
            <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
  }