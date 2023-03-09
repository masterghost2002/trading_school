import { Container, Accordion, AccordionIcon, AccordionButton, AccordionItem,useColorModeValue, Box, AccordionPanel, Heading } from "@chakra-ui/react"
import { FAQData } from "../assests/data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {navAction} from '../store/navstore';
export default function Faq() {
  const color = useColorModeValue('#f9fafb', '#131516');
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(navAction.setNavColor(color));
  },[color, dispatch]);
  return (
    <Container maxW={'100%'} 
      px={[5, 5, 10, 20]}
      py={10} 
      backgroundColor={color}
      fontFamily={`'Rubik', sans-serif`}
      >
      <Heading fontWeight={'600'} fontSize={'2xl'} pb={10}>FAQs</Heading>
      <Accordion defaultIndex={[0]} allowMultiple spaco>
        {
          FAQData.map((item, index) =>
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontSize={'2xl'} py={5} color='blue.400'>
                    {item.heading}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'xl'}>
                {item.content}
              </AccordionPanel>
            </AccordionItem>
          )
        }

      </Accordion>
    </Container>
  )
}
