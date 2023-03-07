import { Container} from "@chakra-ui/react";
import Header from "../components/About/Header";
import { AboutData } from "../assests/data";
import Founder from "../components/About/Founder";
export default function About() {
  return (
    <Container
      maxW={'xxl'}
      p={0}
      fontFamily={`'Rubik', sans-serif`}
    >
      <Header data = {AboutData.Header}/>
      <Founder data = {AboutData.Founder}/>
    </Container>
  )
}
