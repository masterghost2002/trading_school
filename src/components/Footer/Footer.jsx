import React from 'react'
import { Container, useColorMode, Divider, SimpleGrid, GridItem, Text, Stack, Link } from '@chakra-ui/react';
import HeroLogo from '../LandingPage/HeroLogo';
import { Slogan } from '../../assests/data';
import { Email } from '../../assests/data';
const LeftSide = () => {
    return (
        <GridItem colSpan={[3, 3, 1]}
            display={{ base: 'flex', md: 'block' }}
            flexDirection='column'
            alignItems='center'
        >
            <Stack spacing={5}>
                <HeroLogo color='white' />
                <Text fontWeight={500}>{Slogan[0]}</Text>
            </Stack>
        </GridItem>
    )
}
const Center = () => {
    return (
        <GridItem fontFamily={`'Poppins', sans-serif`}
            colSpan={[3, 3, 1]}
            display='flex'
            flexDirection='column'
            alignItems='center'
            
        >
            <Stack spacing={5}>
                <Text fontWeight={600}>Important Links</Text>
                <Stack fontWeight={500}>
                    <Link>Privacy Policy</Link>
                    <Link>Refund Policy</Link>
                    <Link>Contact</Link>
                </Stack>
            </Stack>
        </GridItem>
    )
}
const RightSide = () => {
    return (
        <GridItem colSpan={[3, 3, 1]}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Stack spacing={5}>
                <Text fontWeight={600}>GET IN TOUCH</Text>
                <Text fontWeight={500}>{Email}</Text>
            </Stack>
        </GridItem>
    )
}
export default function Footer() {
    const { colorMode } = useColorMode();
    return (
        <Container
            maxW={'xxl'}
            backgroundColor={colorMode === 'light' ? 'blue.500' : 'blue.600'}
            display='flex'
            flexDirection='column'
            alignItems='space-between'
            px={{ base: 0, md: 20 }}
            fontFamily={`'Montserrat', sans-serif`}
            color = 'white'
        >
            <SimpleGrid
                flex='3'
                columns={3}
                columnGap={2}
                py={10}
                rowGap={5}
            >
                <LeftSide />
                <Center />
                <RightSide />
            </SimpleGrid>

            <Divider height={'10px'} mb='10px' />
            <Text textAlign='center' color='#e8e6e3'>Copyright © 2023 Trading School. All Rights Reserved</Text>
        </Container>
    )
}
