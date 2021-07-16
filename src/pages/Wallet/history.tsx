import { Flex, Box, Heading } from '@chakra-ui/react'
import React from 'react';
import { Header } from "../../components/Header";
import { Pagination } from '../../components/Pagination';
import { Sidebar } from "../../components/Sidebar";
import { HistoryTable } from '../../components/Table';


export default function history() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />
        <Box
          flex='1'
          p='8'
          bg='gray.800'
          borderRadius={8}
        >
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal' >Histórico</Heading>
          </Flex>
          <HistoryTable />
          <Pagination />
        </Box>
      </Flex>
    </Flex>
  )
}