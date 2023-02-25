import { Heading, HStack } from "@chakra-ui/react"
import { Logo } from "../../assests/data"
export default function HeroLogo(props) {
  return (
    <HStack >
        <Heading color={props.color} fontSize={props.fontSize}>{Logo.first}</Heading>
        <Heading   fontSize={props.fontSize}>{Logo.second}</Heading>
    </HStack>
  )
}
