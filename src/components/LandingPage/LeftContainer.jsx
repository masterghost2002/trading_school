import { Container, VStack, Button, Link, HStack, Heading } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { Home } from "../../assests/data";
import HeroLogo from "./HeroLogo";
const LinkButton = (props) =>
    <Button as={Link} html={props.to} p={6} colorScheme={props.colorScheme} variant={props.variant}>
        {props.title}
    </Button>
export default function LeftContainer() {
    return (
        <Container  display='flex' alignItems='center' height='100%'   >
            <VStack width='100%' alignItems='flex-start'>
                <HeroLogo color= 'blue.400' fontSize = {{base:'40px', md:'70px', lg:'70px'}}  />
                <Heading color={'purple.400'}
                    fontWeight='600'
                    fontSize={{ base: '30px', md: '50px', lg: '50px' }}
                >
                    <Typewriter
                        options={{
                            strings: Home.LeftContainer.TypeWriter,
                            autoStart: true,
                            loop: true,
                            delay: 40,
                        }}
                    />
                </Heading>
                <HStack width='100%' >
                    {Home.LeftContainer.buttons.map((button, index) =>
                        <LinkButton
                            key={index}
                            title={button.title}
                            to={button.title} 
                            colorScheme={button.colorScheme}
                            variant = {button.variant}
                        />
                    )}
                </HStack>
            </VStack>
        </Container>
    )
}
