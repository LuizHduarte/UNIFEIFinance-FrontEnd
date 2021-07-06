import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"
import NextLink from "next/link"

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  color: string
  link: string
}
export function NavLink({ icon, children, color, link, ...rest }: NavLinkProps) {
  return (
    <NextLink href={link}>
      <Link display="flex" align="center" color={color} {...rest}>
        <Icon as={icon} fontSize="40" />
        <Text ml='4' fontWeight='medium' fontSize="25">{children}</Text>
      </Link>
    </NextLink>
  )
}