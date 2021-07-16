import { Header } from "../../../components/Header";
import { Flex, Box, Divider, Heading, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react'
import { Sidebar } from "../../../components/Sidebar";
import React from "react";
import { Input } from "../../../components/Form/Input";
import { InputValue } from "../../../components/Form/InputValue";
import { InputQuantity } from "../../../components/Form/InputQuantity";

export default function SellAction() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal'>Realizar Venda</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='ticker' label='Ticker do Ativo' maxLength={5} style={{ textTransform: "uppercase" }} />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <InputValue name='price' label='Preço do Ativo' />
              <InputQuantity name='quantity' label='Quantidade vendida' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='date' type='date' label='Data da venda' />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='red'>Vender</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}