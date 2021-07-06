import { Image } from '@chakra-ui/react'

export function Logo() {
  return (
    <Image
      boxSize="260"
      objectFit="cover"
      src="logo.png"
      alt="logo"
    />
  )
}