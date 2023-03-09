import { Container, useColorModeValue} from "@chakra-ui/react";
import LandingPage from "../components/LandingPage/LandingPage";
import Address from "../components/Address/Address";
import { useDispatch } from "react-redux";
import {navAction} from '../store/navstore';
import { useEffect } from "react";
export default function Home() {
    const color = useColorModeValue('white', '#131516');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(navAction.setNavColor(color));
    }, [color, dispatch]);
    return (
        <Container 
            maxW={'xxl'} 
            p={0}
            backgroundColor={color}
        >
            <LandingPage/>
            <Address/>
        </Container>
    )
}
