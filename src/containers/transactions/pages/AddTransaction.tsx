import React from "react";
import {
  Button,
  ScrollView,
  VStack
} from "native-base";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

import { Spacer } from "../../../components/atoms/Spacer";
import { Header } from "../../../components/organisms/Header";
import { Content } from "../../../components/atoms/Content";
import { useAddTransaction } from "../hooks/useAddTransaction";
import { FormInput } from "../../../components/organisms/HookForm/FormInput";
import { FormSelect } from "../../../components/organisms/HookForm/FormSelect";
import { FormDatePicker } from "../../../components/organisms/HookForm/FormDatePicker";

interface AddTransactionFormData {
  type: string;
  exchange: string;
  symbol: string;
  unitValue: number;
  quantity: number;
  date?: Date;
}

export function AddTransaction() {
  const addTransaction = useAddTransaction()

  const formMethods = useForm<AddTransactionFormData>()

  const { handleSubmit } = formMethods

  const onSubmit: SubmitHandler<AddTransactionFormData> = async (data) => {
    await addTransaction.mutateAsync({
      ...data,
      date: new Date(),
      quantity: Number(data.quantity),
      unitValue: Number(data.unitValue),
    })
  }

  return (
    <FormProvider {...formMethods}>
      <Header
        title="Nova transação"
      />

      <ScrollView>
        <Content>
          <VStack>
            {/* <FormSelect
              label="Categoria"
              name="type"
              options={[
                { label: "Ação", value: "STOCK" },
                { label: "Fundo Imobiliário", value: "FII" },
                { label: "Stock", value: "STOCK" },
                { label: "REIT", value: "REIT" },
              ]}
              required
            />

            <Spacer y={4} /> */}

            <FormSelect
              label="Tipo da transação"
              name="type"
              options={[
                { label: "Compra", value: "purchase" },
                { label: "Venda", value: "sale" },
              ]}
              required
            />

            <Spacer y={4} />

            <FormInput
              label="Corretora"
              required
              name="exchange"
            />

            <Spacer y={4} />

            <FormInput
              label="Ativo"
              required
              name="symbol"
            />

            <Spacer y={4} />

            <FormInput
              label="Valor unitário"
              required
              name="unitValue"
              keyboardType="numeric"
            />

            <Spacer y={4} />

            <FormInput
              label="Quantidade"
              required
              name="quantity"
              keyboardType="number-pad"
            />

            <Spacer y={4} />

            {/* <FormControl>
              <FormControl.Label>Valor das taxas</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl> */}

            {/* <Spacer y={4} />

            <FormDatePicker
              name="date"
              label="Data"
              required
              defaultValue={new Date()}
            /> */}

            <Spacer y={8} />

            <Button size={'lg'} onPress={handleSubmit(onSubmit)}>
              ADICIONAR
            </Button>

            <Spacer y={16} />

          </VStack>
        </Content>
      </ScrollView>
    </FormProvider>
  );
}
