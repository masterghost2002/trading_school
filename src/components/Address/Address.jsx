import { SimpleGrid, GridItem, Heading, Container, Divider, useColorMode } from "@chakra-ui/react";
import useDimensions from "../../customhooks/useDimensions";
import EembedMap from "./EmbededMap";
import AddressCard from './AddressCard';
import { AddressData } from "../../assests/data";
const StyledItem = (props) => {
    const windowWidth = useDimensions().width;
    return (
        <GridItem
            colSpan={[2, 2, 1]}
            order={props.order && windowWidth <= 860 ? 1 : 0}
            display='flex'
            alignItems='center'
            justifyContent='center'
            padding={windowWidth >= 800?20:2}
        >
            {props.child}
        </GridItem>
    )
}
export default function Address() {
    const {colorMode} = useColorMode();
    return (
        <Container 
            maxW={'xxl'} 
            backgroundColor={ colorMode === 'dark'?'#1a1a1a':'#f7f8fc' } 
            px={[2, 5, 10]}
            py={{base:'20px'}}
            >
            <Heading>Reach Out to us</Heading>
            <Divider height='20px' />
            <SimpleGrid
                columns={[2]}
                columnGap={2}
                height={['auto', 'auto', 'auto', '100vh']}
                rowGap={[5]}
            >
                <StyledItem 
                    order={true} 
                    child = {<EembedMap link={AddressData.embededLink}/>}
                />

                <StyledItem 
                    order={true} 
                    child = {<AddressCard data={AddressData.addressCard}  />}
                />
            </SimpleGrid>
        </Container>

    )
}