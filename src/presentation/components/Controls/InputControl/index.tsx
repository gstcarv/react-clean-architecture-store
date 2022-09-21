import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';

type Props = InputProps & {
    label: string;
};

const InputControl = (props: Props) => {
    return (
        <FormControl>
            <FormLabel>{props.label}</FormLabel>
            <Input variant='filled' {...props} />
        </FormControl>
    );
};

export default InputControl;
