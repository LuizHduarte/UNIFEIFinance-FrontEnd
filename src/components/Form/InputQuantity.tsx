import { FormControl, FormLabel, NumberInputStepper, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInput as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { useState } from 'react'


interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}


export function InputQuantity({ name, label }: InputProps) {



  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        min={0}
        step={1}
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