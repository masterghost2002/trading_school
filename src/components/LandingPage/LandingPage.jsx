import { SimpleGrid, GridItem, useColorMode, Container } from "@chakra-ui/react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import useDimensions from "../../customhooks/useDimensions";
export default function LandingPage() {
    const windowWidth = useDimensions().width;
    const { colorMode } = useColorMode();
    return (
        <Container maxW={'xxl'}
            backgroundColor={ colorMode === 'dark'?'#131516':'white' }
        >
            <SimpleGrid
                columns={[2]}
                columnGap={2}
                height={['auto', 'auto', 'auto', '100vh']}
                rowGap={[5]}
                py={5}

            >
                <GridItem colSpan={[2, 2, 1]} order={windowWidth <= 860 ? 1 : 0}  >
                    <LeftContainer />
                </GridItem>
                <GridItem colSpan={[2, 2, 1]}  >
                    <RightContainer />
                </GridItem>
            </SimpleGrid>
        </Container>

    )
}
