import { Image, Box } from '@chakra-ui/react'

export function Logo() {
  return (
    <Box boxSize="260">
      <Image
        objectFit="cover"
        src='/logo.png'
        alt="logo"
      />
    </Box>
  )
}