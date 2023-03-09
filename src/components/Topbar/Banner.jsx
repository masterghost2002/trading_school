import { Flex, Text, SimpleGrid,GridItem, Link, Button } from '@chakra-ui/react';
import { TopBarData } from '../../assests/data';
const LinkButton = (props) =>
    <Button as={Link} href={props.to} isExternal size={'md'}>
        {props.title}
    </Button>
export default function Banner() {

    return (
        <Flex
            w="100%"
            minHeight={12}
            py={5}
            align="center"
            justify="center"
            bgGradient='linear(to-r, cyan.700, purple.500)'
            id="top-badge"
            fontFamily={`'Poppins', sans-serif`}
        >
            <SimpleGrid
                columns={[1, 1, 2]}
                columnGap={2}
                rowGap={2}
            >
                <GridItem align='center'>
                    <Text fontSize={['md', 'xl']} fontWeight={600} align='center' color='white'>{TopBarData.Banner.content}</Text>
                </GridItem>
                <GridItem align='center'>
                    {
                        TopBarData.Banner.buttons.map((button, index)=>
                            <LinkButton key={index} to={button.to} title={button.title}/>
                        )
                    }
                </GridItem>
            </SimpleGrid>
        </Flex>
    )
}