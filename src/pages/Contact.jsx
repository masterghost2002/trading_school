import {
    Image,
    VStack, SimpleGrid,
    GridItem, Box,

    Container,
    useColorModeValue,
    Heading
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import Banner from '../assests/images/trading_school_banner.webp';
import React from "react";
import Form from "../components/Form/Form";
export default function Contact() {
    const [spinner, setSpinner] = useState(false);
    const formValidate = (e) => {
        // const formData = new FormData(e.currentTarget);
        // const formObject = Object.fromEntries(formData.entries());
        // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // let name = String(formObject.fullname);
        // let message = String(formObject.message);
        // let email = String(formObject.email);

        return true;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValidate(e)) return;
        setSpinner(true);
    }
    return (
        <Container
            maxW='xxl'
            p={0}
            backgroundColor={useColorModeValue('white', '#131516')}
        >
            <Image
                src={Banner}
                width='100%'
                height={['30vh', '40vh']}
                overflowY='hidden'
                objectFit='cover'
            />
            <Container  maxW='xxl' px={[2,5,10, 20]}>
                <SimpleGrid
                    columns={3}
                    columnGap={5}
                    rowGap={5}
                    backgroundColor={useColorModeValue('white', '#3C4048' )}
                    position='relative'
                    top='-10vh'
                    borderRadius='6px'
                    boxShadow='md'
                >
                    <GridItem colSpan={[3, 3, 1]}>
                        <Box
                            minHeight={['20vh', '100%']}
                            borderRadius='6px 0px 0px 6px'
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            py={5}
                            color='white'
                            backgroundColor={useColorModeValue('blue.400', 'blue.500')}
                        >
                            <VStack gap={10}>
                                <Heading >Get In Touch</Heading>
                                <HiOutlineMail fontSize={'60px'} />
                            </VStack>
                        </Box>

                    </GridItem>
                    <GridItem colSpan={[3, 3, 2]} p={5}>
                        <Form handleSubmit={handleSubmit} spinner={spinner}/>
                    </GridItem>

                </SimpleGrid>
            </Container >



        </Container>
    )
}