import { Container, Heading, useColorModeValue, HStack, SimpleGrid, GridItem ,  Divider} from "@chakra-ui/react";
import CourseCard from "../components/CourseCard/CourseCard";
import { CoursesData} from "../assests/data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {navAction} from '../store/navstore';
const Header = () => {
  return (
    <HStack justifyContent={'center'} py={5}>
      <Heading fontFamily={`'Montserrat', sans-serif`}>
        Available
      </Heading>
      <Heading color='blue.600' fontFamily={`'Montserrat', sans-serif`}>
        Courses
      </Heading>
    </HStack>
  )
}
export default function Courses() {
  const color = useColorModeValue('#f9fafb', 'black');
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(navAction.setNavColor(color));
  },[color, dispatch]);
  return (
    <Container
      maxW={'xxl'}
      backgroundColor = {color}
      px={[5,5,10,20]}
      
    >
      <Header />
      <SimpleGrid columns={2} columnGap={10} rowGap={10} py={[10, 10]}>
        {
          CoursesData.Courses.map((course, index) =>
            <GridItem key={index} colSpan={[2, 2, 1]} px={[2,2, 5, 10]}>
              <CourseCard data={course} />
            </GridItem>
          )
        }
      </SimpleGrid>
      <Heading color={'purple.400'}>What will you Learn?</Heading>
      <Divider  my={5}/>
      <SimpleGrid columns={2} columnGap={10} rowGap={10} py={[5, 5]} data-aos="slide-up">
        {
           CoursesData.WhatYouLearn.map((item, index) =>
            <GridItem key={index} colSpan={[2, 2, 1]} px={[2,2, 5, 20]}>
              <Heading fontSize={'20px'} key={index} color='gray.500'>{item}</Heading>
            </GridItem>
          )
        }
      </SimpleGrid>
     
    </Container>
  )
}
