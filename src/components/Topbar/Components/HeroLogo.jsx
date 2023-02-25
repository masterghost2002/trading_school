import { HStack, Text, useColorMode} from "@chakra-ui/react";
import { TopBarData } from "../../../assests/data";
export default function HeroLogo() {
    const { colorMode } = useColorMode();
    return (
        <>
            <HStack display={{ base: 'flex', md: 'flex' }} fontWeight={600} fontSize={{base:'2xl', md:'30px'}}>
                <Text
                    color='blue.500'
                >
                    {TopBarData.NavBar.HeroLg.first}
                </Text>
                <Text
                    color={colorMode === 'light' ? 'black' : 'white'}
                >
                    {TopBarData.NavBar.HeroLg.second}
                </Text>
            </HStack>
        </>
    )
}