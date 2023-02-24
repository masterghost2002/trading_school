import {
    Container,
    VStack, FormControl,
    FormLabel, Input,
    InputLeftElement, InputGroup,
    Textarea, SimpleGrid,
    GridItem, Box,
    Text, Button,
    Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import React from "react";
export default function Contact() {
    const [spinner, setSpinner] = useState(false);
    const formValidate = (e)=> {
        // const formData = new FormData(e.currentTarget);
        // const formObject = Object.fromEntries(formData.entries());
        // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // let name = String(formObject.fullname);
        // let message = String(formObject.message);
        // let email = String(formObject.email);

        return true;

    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!formValidate(e)) return;
        setSpinner(true);
    }
    return (
        <Container minWidth='100%' py={5}
            borderRadius={6}
            my={5}
        >
            <SimpleGrid
                columns={3}
                columnGap={5}
                rowGap={5}
                my={5}
            >
                <GridItem colSpan={[3, 3, 1]}>
                    <Box
                        minHeight={['20vh', '100%']}
                        borderRadius={6}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        py={5}
                    >
                        <VStack gap={10}>
                            <Text fontWeight={'bold'}>Write Message/Project Details</Text>
                            <HiOutlineMail fontSize={'60px'}  />
                        </VStack>
                    </Box>

                </GridItem>
                <GridItem colSpan={[3, 3, 2]}>
                    <form onSubmit={handleSubmit} >
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Full Name</FormLabel>
                            <Input isRequired={true} type='text' name='fullname' placeholder='John Wick' variant='flushed' ></Input>
                        </FormControl>
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Email Address</FormLabel>
                            <InputGroup >
                                <InputLeftElement children={<HiOutlineMail />} />
                                <Input isRequired={true} type='text' name='email' placeholder='johnwick@mail.com' variant='flushed' ></Input>
                            </InputGroup>
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel fontWeight={'bold'}>Phone</FormLabel>
                            <InputGroup >
                                <InputLeftElement children={<BsFillTelephoneFill />} />
                                <Input type="text" name="phone" placeholder="123-456-7890" variant='flushed'></Input>
                            </InputGroup>
                        </FormControl>
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Message</FormLabel>
                            <Textarea placeholder='type...' name='message' size='md'></Textarea>
                        </FormControl>
                        <VStack width={'100%'}>
                            <Button alignSelf={'flex-end'} rightIcon={spinner?<Spinner />:<FaLocationArrow/>} colorScheme='purple' size='lg' type="submit">
                                {spinner?"Sending":"Submit"}
                            </Button>
                        </VStack>
                    </form>
                </GridItem>

            </SimpleGrid>


        </Container>
    )
}