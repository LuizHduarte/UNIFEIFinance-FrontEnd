import { Header } from "../../components/Header";
import { Flex, Box, Divider, Heading, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react'
import { Sidebar } from "../../components/Sidebar";
import React from "react";
import { Input } from "../../components/Form/Input";
import { InputValue } from "../../components/Form/InputValue";
import { InputQuantity } from "../../components/Form/InputQuantity";

export default function BuyAction() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal'>Realizar Compra</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='ticker' label='Ticker do Ativo' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <InputValue name='price' label='Preço do Ativo' />
              <InputQuantity name='quantity' label='Quantidade comprada' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='date' type='date' label='Data da Compra' />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='red'>Comprar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}