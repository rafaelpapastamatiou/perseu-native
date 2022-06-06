import React from 'react'
import { Button, FormControl, Input, VStack } from 'native-base'
import { Content } from '../../../components/atoms/Content'
import { Spacer } from '../../../components/atoms/Spacer'

export function SignIn() {
  return (
    <Content>
      <VStack>
        <FormControl>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input bgColor={"dark.50"} size={"2xl"} />
        </FormControl>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Senha</FormControl.Label>
          <Input type='password' bgColor={"dark.50"} size={"2xl"} />
        </FormControl>

        <Spacer y={8} />

        <Button size={'lg'}>
          Entrar
        </Button>
      </VStack>
    </Content>
  )
}
