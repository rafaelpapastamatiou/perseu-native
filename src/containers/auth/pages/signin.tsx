import React from 'react'
import { Button, Text, VStack } from 'native-base'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Content } from '../../../components/atoms/Content'
import { Spacer } from '../../../components/atoms/Spacer'
import { FormInput } from '../../../components/organisms/HookForm/FormInput'
import { useAuth } from '../../../hooks/useAuth'


type SignInFormData = {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Informe o e-mail')
    .email('O valor precisa ser um e-mail'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
}).required()

export function SignIn() {
  const { signIn } = useAuth()

  const formMethods = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  })

  const { handleSubmit } = formMethods

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    signIn(data)
  }

  return (
    <Content>
      <VStack my={"auto"}>
        <Text
          fontSize={52}
          mx="auto"
        >
          perseu<Text color={"brand.500"}>.</Text>
        </Text>

        <Spacer y={16} />

        <FormProvider {...formMethods}>
          <FormInput
            name='email'
            label='E-mail'
            required
            autoCapitalize={"none"}
            placeholder=""
            autoCorrect={false}
          />

          <Spacer y={4} />

          <FormInput
            name='password'
            label='Senha'
            required
            type='password'
            autoCapitalize={"none"}
          />

          <Spacer y={8} />

          <Button
            size={'lg'}
            onPress={handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </FormProvider>
      </VStack>
    </Content>
  )
}
