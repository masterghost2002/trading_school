import { Card, CardBody, Heading, Stack, Box, Text, CardHeader, StackDivider, HStack, useColorMode, Button } from "@chakra-ui/react";
import { calculateDiscount } from "../../assests/data";
const PriceContainer = ({ price, dPrice }) => {
  return (
    <HStack>
      <Text fontSize={'20px'} fontWeight={700} color='purple.400'>₹{dPrice}</Text>
      <Text fontSize={'20px'} fontWeight={700} color='gray.400'><strike>₹{price}</strike></Text>
      <Box backgroundColor='#1dd1a1' padding={1} color='white' borderRadius={'6px'} fontWeight={700}>{calculateDiscount(price, dPrice)}% OFF</Box>
    </HStack>
  )

}
const DetailComponent = (props)=>{
  return (
      <HStack  pt={1} justifyContent='space-between'>
        <Text fontWeight={600} color={'gray.500'}>{props.heading}</Text>
        <Text  color={'gray.400'} fontWeight={600}>{props.value}</Text>
      </HStack>
  )
}

export default function CourseCard(props) {
  console.log(props);
  const { colorMode } = useColorMode();
  return (
    <Card backgroundColor={colorMode === 'dark' ? '#3C4048' : 'white'} borderRadius='12px'>
      <CardHeader>
        <Heading >{props.data.Type}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <PriceContainer price={props.data.Price} dPrice={props.data.DiscountedPrice} />
          <Box>
            <Heading size='sm' textTransform='uppercase' >
              Overview
            </Heading>
            <Text pt='2' color='gray.400' fontWeight={600}>
              {props.data.Overview}
            </Text>
          </Box>
          <Box>
            <Heading size='sm' textTransform='uppercase'>
              Class Details
            </Heading>
            <Stack>
              <DetailComponent heading='Duration' value={props.data.ClassDuration} />
            </Stack>
            <Stack>
              <DetailComponent heading='Timing' value={props.data.ClassTiming} />
            </Stack>
            <Stack>
              <DetailComponent heading='Language' value={props.data.ModeOfLanguage} />
            </Stack>
          </Box>
          <Box>
            <Button colorScheme={'purple'}>Enroll Now</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
