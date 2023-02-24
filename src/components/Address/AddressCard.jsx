import { Card, CardBody, Stack, Image, Heading, Text, HStack, Divider } from "@chakra-ui/react"
import trading_school from '../../assests/images/trading_school.jpeg';
export default function AddressCard(props) {
  return (
    <Card maxW='md' background='transparent' boxShadow='none' p={0} >
      <CardBody p={0}  fontFamily={`'Montserrat', sans-serif`} fontSize='lg' >
        <Image
          src={trading_school}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          maxW={{ base: '100%', sm: '400px' }}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Trading School Address</Heading>
          <Divider/>
          <Stack>
            <HStack>
              <Text fontWeight={600}>Society</Text>
              <Text>{props.data.Society}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>City</Text>
              <Text>{props.data.City}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>State</Text>
              <Text>{props.data.State}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>Pincode</Text>
              <Text>{props.data.Pincode}</Text>
            </HStack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}
