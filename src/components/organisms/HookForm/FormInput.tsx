import React from 'react'
import { FormControl, Input, IInputProps, WarningOutlineIcon, Text } from 'native-base'
import { Controller, useFormContext } from 'react-hook-form';

import { useGetFieldError } from '../../../hooks/HookForm/useGetFieldError';

interface FormInputProps extends Omit<IInputProps, 'value' | 'onChangeText'> {
  label?: string;
  name: string;
  defaultValue?: any;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function FormInput({
  label,
  name,
  defaultValue,
  helperText,
  required,
  disabled,
  readOnly,
  ...rest
}: FormInputProps) {
  const { control, formState } = useFormContext()

  const { errors } = formState

  const { error, hasError } = useGetFieldError({
    name,
    errors
  })

  return (
    <FormControl
      isInvalid={hasError}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      {label && <FormControl.Label>{label}</FormControl.Label>}

      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({ field: { onChange, value, ...fieldProps } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            bgColor={"dark.50"}
            size={"2xl"}
            {...fieldProps}
            {...rest}
          />
        )}
      />

      {helperText && (
        <FormControl.HelperText>
          {helperText}
        </FormControl.HelperText>
      )}

      {hasError && (
        <FormControl.ErrorMessage
          leftIcon={<WarningOutlineIcon size="xs" />}
        >
          <Text>{error.message}</Text>
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  )
}
