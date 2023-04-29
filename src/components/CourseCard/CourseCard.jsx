import { Card, CardBody, Heading, Stack, List, ListItem, ListIcon, Box, Text, CardHeader, useDisclosure, StackDivider, HStack, useColorModeValue, Button, Link } from "@chakra-ui/react";
import { calculateDiscount } from "../../assests/data";
import VerticallyCenterModal from '../Modal/VerticallyCenterModal';
import StepsFoot from "../CustomIcons/StepsFoot";
import { SiRazorpay } from "react-icons/si";
import { SocialWhatsApp } from "../../assests/data";
const PriceContainer = ({ price, dPrice }) => {
  return (
    <HStack>
      <Text fontSize={'20px'} fontWeight={700} color='purple.400'>₹{dPrice}</Text>
      <Text fontSize={'20px'} fontWeight={700} color='gray.400'><strike>₹{price}</strike></Text>
      <Box backgroundColor='#1dd1a1' padding={1} color='white' borderRadius={'6px'} fontWeight={700}>{calculateDiscount(price, dPrice)}% OFF</Box>
    </HStack>
  )

}
const DetailComponent = (props) => {
  return (
    <HStack pt={1} justifyContent='space-between'>
      <Text fontWeight={500} color={'gray.500'}>{props.heading}</Text>
      <Text color={'gray.400'} fontWeight={500}>{props.value}</Text>
    </HStack>
  )
}
const EnrollSteps = (props) => {
  return (<List spacing={3} fontFamily={`'Poppins', sans-serif`}>
    {
      props.data.map((steps, index) =>
        <ListItem key={index} fontSize={'xl'}>
          <ListIcon ><StepsFoot color='#48BB78' /></ListIcon>
          {steps}
        </ListItem>
      )
    }
  </List>)
}
const ModalFooter = (props) => {
  return (
    <>
      <Link href={SocialWhatsApp.to} isExternal fontSize={'24px'}>
        {SocialWhatsApp.child}
      </Link>
      <Button href={props.data.to} isExternal colorScheme='green' as={Link} rightIcon={<SiRazorpay />} _hover={{ textDecoration: 'none' }}>
        {props.data.heading}
      </Button>
    </>
  )
}
export default function CourseCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxBg = useColorModeValue('white', '#3C4048');
  return (
    <Card backgroundColor={useColorModeValue('white', '#3C4048')} borderRadius='12px'>
      <CardHeader>
        <Heading >{props.data.Type}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <PriceContainer price={props.data.Price} dPrice={props.data.DiscountedPrice} />
          <Box>
            <Heading size='sm' textTransform='uppercase' >
              {props.data.Overview.heading}
            </Heading>
            <Text pt='2' color='gray.400' fontWeight={600}>
              {props.data.Overview.content}
            </Text>
          </Box>
          <Box>
            <Heading size='sm' textTransform='uppercase'>
              {props.data.Details.heading}
            </Heading>
            {
              props.data.Details.content.map((detail, index) =>
                <Stack key={index}>
                  <DetailComponent heading={detail.heading} value={detail.content} />
                </Stack>
              )
            }

          </Box>
{props.data.showEnroll && <Box>
            <Button colorScheme={'purple'} onClick={onOpen}>Enroll Now</Button>
            <VerticallyCenterModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              children={<EnrollSteps data={props.data.EnrollSteps} />}
              heading="Enroll Steps"
              hfs='3xl'
              bg={boxBg}
              footer={<ModalFooter data={props.data.Payment} />}
            />
          </Box>}
        </Stack>
      </CardBody>
    </Card>
  )
}
