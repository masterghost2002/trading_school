import { SimpleGrid, GridItem, Heading, Container, Divider, useColorModeValue } from "@chakra-ui/react";
import useDimensions from "../../customhooks/useDimensions";
import EembedMap from "./EmbededMap";
import AddressCard from './AddressCard';
import { AddressData } from "../../assests/data";
const StyledItem = (props) => {
    const windowWidth = useDimensions().width;
    return (
        <GridItem
            data-aos="zoom-in-up"
            colSpan={[2, 2, 1]}
            order={props.order && windowWidth <= 860 ? 1 : 0}
            display='flex'
            alignItems='center'
            justifyContent='center'
            padding={windowWidth >= 800?10:2}
        >
            {props.child}
        </GridItem>
    )
}
export default function Address() {
    return (
        <Container 
            maxW={'xxl'} 
            backgroundColor={useColorModeValue('#f7f8fc', '#1a1a1a')}
            px={[5,5,10,20]}
            py={{base:'20px'}}
            >
            <Heading>{AddressData.Heading}</Heading>
            <Divider height='20px' />
            <SimpleGrid
                columns={[2]}
                columnGap={2}
                rowGap={[5]}
            >
                <StyledItem 
                    order={true} 
                    child = {<EembedMap link={AddressData.embededLink}/>}
                />

                <StyledItem 
                    order={true} 
                
                    child = {<AddressCard data={AddressData.addressCard}  heading = {AddressData.CardHeading} cardImage={AddressData.CardImage}/>}
                />
            </SimpleGrid>
        </Container>

    )
}
