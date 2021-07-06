import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr='4' textAlign='right'>
        <Text>Luiz Duarte</Text>
        <Text color="gray.300" fontSize="small">luiz.duarte@unifei.edu.br</Text>
      </Box>
      <Avatar size='md' name="Luiz Duarte" />
    </Flex>
  )
}