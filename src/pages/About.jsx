import { Container, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/About/Header";
import { AboutData } from "../assests/data";
import Founder from "../components/About/Founder";
import { useDispatch } from "react-redux";
import { navAction } from '../store/navstore';
import { useEffect } from "react";
export default function About() {
  const color = useColorModeValue('white', '#131516');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navAction.setNavColor(color));
  }, [color, dispatch]);
  return (
    <Container
      maxW={'xxl'}
      p={0}
      fontFamily={`'Rubik', sans-serif`}
    >
      <Header data={AboutData.Header} />
      <Founder data={AboutData.Founder} />
    </Container>
  )
}
