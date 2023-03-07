import { Container, useColorModeValue, Heading, Text } from "@chakra-ui/react";
const Detail = ({ heading, content }) => {
    return (
        <>
            <Heading color='white' size={'3xl'}>
                {heading}
            </Heading>
            <Text fontWeight={'400'} fontSize={'2xl'} py={10} color='gray.50' >
                {content}
            </Text>
        </>
    )

}
export default function Header(props) {
    return (
        <Container
            maxW={'xxl'}
            p={0}
            backgroundRepeat="no-repeat"
            backgroundAttachment={'fixed'}
            backgroundImage={props.data.image}
            backgroundColor={useColorModeValue('blue.400', 'blue.500')}
            minH={'100vh'}
            backgroundSize='fit'
            backdropFilter='blur(10px)'
        >
            <Container maxW={'xxl'} p={[5, 10, 15, 20]}>
                {
                    props.data.details.map((detail, index) =>
                        <Detail heading={detail.heading} content={detail.content} key={index} />
                    )
                }
            </Container>

        </Container>
    )
}
