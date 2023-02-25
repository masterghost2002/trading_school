import { Card, CardBody, Stack, Image, Heading, Text, HStack, Divider } from "@chakra-ui/react";

const AddressLine = (props)=>{
  return (
    <HStack>
      <Text fontWeight={600}>{props.heading}</Text>
      <Text>{props.value}</Text>
    </HStack>
  )
}
export default function AddressCard(props) { 
  return (
    <Card maxW='md' background='transparent' boxShadow='none' p={0} >
      <CardBody p={0}  fontFamily={`'Montserrat', sans-serif`} fontSize='lg' >
        <Image
          src={props.cardImage}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          maxW={{ base: '100%', sm: '400px' }}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.heading}</Heading>
          <Divider/>
          <Stack>
            {
              props.data.map((addressLine, index)=>
                <AddressLine heading = {addressLine.Heading} value = {addressLine.Value} key={index}/>
              )
            }
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}
