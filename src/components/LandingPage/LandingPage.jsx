import { SimpleGrid, GridItem, Container } from "@chakra-ui/react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import useDimensions from "../../customhooks/useDimensions";
export default function LandingPage() {
    const windowWidth = useDimensions().width;
   
    return (
        <Container maxW={'xxl'}
            px={[5, 5, 10, 20]}
            id="animatedBg"
        >
            <SimpleGrid
                columns={[2]}
                columnGap={2}
                height={['auto', 'auto', 'auto', '100vh']}
                rowGap={[5]}
                py={5}


            >
                <GridItem colSpan={[2, 2, 1]} order={windowWidth <= 860 ? 1 : 0} p={0} >
                    <LeftContainer />
                </GridItem>
                <GridItem colSpan={[2, 2, 1]}  >
                    <RightContainer />
                </GridItem>
            </SimpleGrid>
        </Container>

    )
}
