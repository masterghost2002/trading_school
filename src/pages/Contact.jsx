import {
    Image,
    VStack, SimpleGrid,
    GridItem, Box,
    Container,
    useColorModeValue,
    Heading,
    HStack,
    Link
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import Banner from '../assests/images/trading_school_banner.webp';
import Form from "../components/Form/Form";
import { useDispatch } from "react-redux";
import { navAction } from '../store/navstore';
import { Socials } from "../assests/data";
export default function Contact() {
    const [spinner, setSpinner] = useState(false);
    const color = useColorModeValue('white', '#131516');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navAction.setNavColor(color));
    }, [color, dispatch])
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
            <Container maxW='xxl' px={[5, 5, 10, 20]}>
                <SimpleGrid
                    columns={3}
                    columnGap={5}
                    rowGap={5}
                    backgroundColor={useColorModeValue('white', '#3C4048')}
                    position='relative'
                    top='-10vh'
                    boxShadow='md'
                >
                    <GridItem colSpan={[3, 3, 1]}>
                        <Box
                            minHeight={['40vh', '100%']}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={'column'}
                            py={5}
                            color='white'
                            backgroundColor={useColorModeValue('blue.400', 'blue.500')}
                        >
                            <VStack gap={5} width={'100%'}>
                                <Heading >Get In Touch</Heading>
                                <HiOutlineMail fontSize={'60px'} />
                            </VStack>
                            <Heading my={10}>OR</Heading>
                            <HStack justifyContent={'space-around'} width={'100%'} justifySelf='self-end' >
                                {
                                    Socials.map((social, index) =>
                                        <Link key={index} href={social.to} isExternal fontSize={'30px'}>
                                            {social.child}
                                        </Link>
                                    )
                                }
                            </HStack>
                        </Box>

                    </GridItem>
                    <GridItem colSpan={[3, 3, 2]} p={5}>
                        <Form handleSubmit={handleSubmit} spinner={spinner} />
                    </GridItem>

                </SimpleGrid>
            </Container >



        </Container>
    )
}