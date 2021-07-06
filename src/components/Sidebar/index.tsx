
import { Box, Stack, } from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineRise, AiOutlineHistory, AiOutlineCloudUpload } from 'react-icons/ai'

import React from 'react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={AiOutlineRise} color='white' link="/dashboard">Resumo</NavLink>
          <NavLink icon={AiOutlineHistory} link="/history" color='white'>Histórico</NavLink>
        </NavSection>

        <NavSection title="OPERAÇÕES">
          <NavLink icon={AiOutlinePlus} link="/Operations/Buy" color='green.400'>Comprar</NavLink>
          <NavLink icon={AiOutlineMinus} link="/Operations/Sell" color='red.400' >Vender</NavLink>
          <NavLink icon={AiOutlineCloudUpload} link="/Operations/Import" color='white'>Importar</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}