import { Tr, Checkbox, Td, Text, Button } from '@chakra-ui/react'

interface TableDataProps {
  ticker: string
  quantity: number
  price: number
  date: string
  type: string
}
export function TableData({ ticker, quantity, price, date, type }: TableDataProps) {
  var color = 'green'
  if (type == 'Venda') {
    color = 'red'
  }
  return (
    <Tr>
      <Td px='6'>
        <Checkbox colorScheme='red' />
      </Td>
      <Td ><Text fontWeight='bold'>{ticker}</Text></Td>
      <Td ><Text fontWeight='bold'>{quantity}</Text></Td>
      <Td ><Text fontWeight='bold'>{price}</Text></Td>
      <Td ><Text fontWeight='bold'>{date}</Text></Td>
      <Td ><Text color={color}>{type}</Text></Td>
      <Td>
        <Button as='a' size='sm' fontSize='sm' colorScheme='red'>
          Editar
        </Button>
      </Td>
    </Tr>
  )
}