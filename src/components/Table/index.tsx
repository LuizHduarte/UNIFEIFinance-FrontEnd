import { Table, Thead, Tr, Th, Checkbox, Tbody } from '@chakra-ui/react'
import { TableData } from './TableData'

export function HistoryTable() {
  return (
    <Table colorScheme='whiteAlpha'>
      <Thead>
        <Tr>
          <Th px='6' color='gray.300' w='8'>
            <Checkbox colorScheme='red' />
          </Th>
          <Th>Ticker</Th>
          <Th>Quantidade</Th>
          <Th>Preço</Th>
          <Th>Data</Th>
          <Th>Tipo</Th>
          <Th width='8'></Th>
        </Tr>
      </Thead>
      <Tbody>
        <TableData ticker='ITSA4' quantity={250} price={11.80} date='03-04-2021' type='Compra' />
        <TableData ticker='BBAS3' quantity={50} price={31.56} date='05-06-2021' type='Venda' />
        <TableData ticker='SAPR4' quantity={32} price={11.80} date='07-06-2021' type='Compra' />
        <TableData ticker='OIBR3' quantity={1500} price={5.52} date='08-07-2021' type='Venda' />
        <TableData ticker='VALE3' quantity={120} price={50.63} date='09-07-2021' type='Venda' />
      </Tbody>
    </Table>
  )
}