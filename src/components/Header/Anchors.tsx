import { Link, HStack, Text, Box } from '@chakra-ui/react'
import NextLink from "next/link"

export function Anchors() {
  return (
    <Box w={["2xl", '3xl']}>
      <HStack spacing='20'>
        <NextLink href="/dashboard">
          <Link>
            <Text fontSize={["2xl", '3xl']} fontWeight="bold" letterSpacing="tight" pl='4'>
              Carteira
            </Text>
          </Link>
        </NextLink>


        <Link>
          <Text fontSize={["2xl", '3xl']} fontWeight="bold" letterSpacing="tight" >
            Índices
          </Text>
        </Link>
        <Link >
          <Text fontSize={["2xl", '3xl']} fontWeight="bold" letterSpacing="tight">
            benchmark
          </Text>
        </Link>
        <Link>
          <Text fontSize={["2xl", '3xl']} fontWeight="bold" letterSpacing="tight">
            Consultas
          </Text>
        </Link>
      </HStack>
    </Box>
  )
}