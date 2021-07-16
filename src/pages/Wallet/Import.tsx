import { Header } from "../../components/Header";
import { Flex, Box, Divider, Heading, VStack, HStack, SimpleGrid, Button, FormLabel, Select, Icon, Input as PureInput } from '@chakra-ui/react'
import { Sidebar } from "../../components/Sidebar";
import React from "react";
import { Input } from "../../components/Form/Input";

import InputMask from "react-input-mask";

import { InputValue } from "../../components/Form/InputValue";
import { InputQuantity } from "../../components/Form/InputQuantity";


export default function ImportAction() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal'>Importar Dados do CEI</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <div>
                <FormLabel htmlFor='cpf'>CPF</FormLabel>
                <PureInput
                  name='cpf'
                  as={InputMask}
                  mask="***.***.***-**"
                  id='cpf'
                  focusBorderColor='red.500'
                  bgColor='gray.900'
                  variant='filled'
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size='lg' />
              </div>

            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='password' label='Senha' type='password' />
            </SimpleGrid>

          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='red'>Importar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}