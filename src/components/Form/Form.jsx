import { FormControl, Input, FormLabel, Textarea, Button, VStack, Spinner } from "@chakra-ui/react";
import { ContactFormData } from "../../assests/data";
import { FaLocationArrow } from 'react-icons/fa';
const FormInput = (props) => {
    return (
        <FormControl mb={4} isRequired={props.isRequired}>
            <FormLabel fontWeight={props.fontWeight} fontSize={props.fontSize}>{props.label}</FormLabel>
            <Input  type={props.type} name={props.name} placeholder={props.placeholder} variant={props.variant}/>
        </FormControl>
    )
}
export default function Form({ handleSubmit, spinner }) {
    
    return (
        <form onSubmit={handleSubmit} >
            {
                ContactFormData.map((input, index)=>
                    <FormInput
                        key = {index}
                        fontWeight = {input.fontWeight}
                        fontSize = {input.fontSize}
                        isRequired = {input.isRequired}
                        name = {input.name}
                        placeholder = {input.placeholder}
                        variant = {input.variant}
                        label = {input.label}

                    />
                )
            }
            <FormControl mb={4} isRequired>
                <FormLabel fontWeight={'bold'} fontSize='24px'>Message</FormLabel>
                <Textarea placeholder='type...' name='message' size='md'></Textarea>
            </FormControl>
            <VStack width={'100%'}>
                <Button alignSelf={'flex-end'} rightIcon={spinner ? <Spinner /> : <FaLocationArrow />} colorScheme='blue' size='lg' type="submit">
                    {spinner ? "Sending" : "Submit"}
                </Button>
            </VStack>
        </form>
    )
}
