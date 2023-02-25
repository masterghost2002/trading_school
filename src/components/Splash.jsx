import { Flex, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroLogo from './LandingPage/HeroLogo'
export default function Splash() {
  return (
    <Flex width={'100vw'} height={'100vh'} justifyContent='center' alignItems={'center'} bg={useColorModeValue('white', '#131516')} position='fixed' zIndex={2000}>
        <VStack>
            <HeroLogo color='blue.400' fontSize={['40px', '50px', '50px', '60px']}/>
            <Heading color={'purple.400'}>😋 Cooking...</Heading>
        </VStack>
    </Flex>
  )
}
