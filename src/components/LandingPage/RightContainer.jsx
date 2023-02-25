import { Flex, Image } from "@chakra-ui/react";
import StockImage from '../../assests/images/home_right.png';
export default function RightContainer() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
      <Image
        src={StockImage}
        alt='Dan Abramov'
      />
    </Flex>
  )
}
