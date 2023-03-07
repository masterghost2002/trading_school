import { Container, useColorModeValue} from "@chakra-ui/react";
import LandingPage from "../components/LandingPage/LandingPage";
import Address from "../components/Address/Address";
export default function Home() {

    
    return (
        <Container 
            maxW={'xxl'} 
            p={0}

            backgroundColor={useColorModeValue('white', '#131516')}
        >
            <LandingPage/>
            <Address/>
        </Container>
    )
}
