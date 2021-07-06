import { FormControl, FormLabel, NumberInputStepper, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInput as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { useState } from 'react'


interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}


export function InputValue({ name, label }: InputProps) {

  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, "")

  const [value, setValue] = useState("0.00")

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        min={0}
        precision={2}
        step={0.2}
        name={name}
        id={name}
        focusBorderColor='red.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg'
      >
        <NumberInputField
          bgColor='gray.900'
          _hover={{
            bgColor: 'gray.900'
          }} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraInput>
    </FormControl>
  )
}