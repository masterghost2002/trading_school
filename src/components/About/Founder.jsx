import { Container, SimpleGrid, GridItem, useColorModeValue , Flex, Image, Heading, Text} from "@chakra-ui/react";

export default function Founder(props) {
    return (
        <Container maxW={'xxl'}
            backgroundColor={useColorModeValue('white', '#131516')}
        >
            <SimpleGrid
                columns={[3]}
                columnGap={20}
                height={'auto'}
                rowGap={[5]}
                py={[5,10,15,20]}
                px={[5,10,15,20]}

            >

                <GridItem colSpan={[3, 1, 1]}  >
                    <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
                        <Image
                            src={props.data.image}
                            alt='Dan Abramov'
                            borderRadius='100%'
                            boxSize={['300', '400']}
                        />
                    </Flex>
                </GridItem>
                <GridItem colSpan={[3, 2, 2]}  >
                <Flex justifyContent={'center'} flexDirection='column' alignItems={'center'} height={'100%'}>
                    <Heading size={'2xl'} pb={5}>{props.data.name}</Heading>
                    <Text color={'gray.600'} pb={10} fontWeight={600}  fontFamily={`'Montserrat', sans-serif`} fontSize={'xl'}>{props.data.overview}</Text>
                    {
                        props.data.info.map((content, index)=><Text color={'gray.500'} fontSize={'xl'}  key={index}>{content}</Text>)
                    }
                </Flex>
                </GridItem>
            </SimpleGrid>
        </Container>
    )
}
