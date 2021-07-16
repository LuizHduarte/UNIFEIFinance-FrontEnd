import { Flex, Button, Stack } from '@chakra-ui/react';
import Router from "next/router";
import React from 'react';
import { useState } from 'react';
import { Input } from '../components/Form/Input'



export default function SignIn() {

  const [user, setUser] = useState('');

  function handlePush() {
    localStorage.setItem('user', user)
    Router.push('/Wallet/dashboard')
  }


  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p='8'
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" type='email' label="E-mail" value={user} onChange={e => setUser(e.target.value)} />
          <Input name="password" type='password' label="Senha" />
        </Stack>

        <Button type='button' onClick={handlePush} mt='6' colorScheme='red' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
