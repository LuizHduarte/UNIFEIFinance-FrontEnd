import { Flex } from "@chakra-ui/react"
import { Anchors } from "../Header/Anchors"
import { Logo } from "../Header/Logo"
import { NotificationsNav } from "../Header/NotificationsNav"
import { Profile } from "../Header/Profile"


export function Header() {
  return (
    <Flex
      as='header'
      w="100%"
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      align='center'
      px='6'
      flexDirection='row'
    >
      <Logo />


      <Anchors />

      <Flex align="center" ml='auto'>
        <NotificationsNav />
      </Flex>

      <Profile />
    </Flex>
  )
}