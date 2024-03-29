import React from 'react'
import {
  FormControl,
  ISelectProps,
  ISelectItemProps,
  WarningOutlineIcon,
  Select,
  Text
} from 'native-base'
import { Controller, useFormContext } from 'react-hook-form';

import { useGetFieldError } from '../../../hooks/HookForm/useGetFieldError';

interface FormSelectProps extends Omit<ISelectProps, 'selectedValue' | 'onValueChange'> {
  label?: string;
  name: string;
  defaultValue?: any;
  helperText?: string;
  options: ISelectItemProps[];
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function FormSelect({
  label,
  name,
  defaultValue,
  helperText,
  required,
  disabled,
  readOnly,
  options = [],
  ...rest
}: FormSelectProps) {
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
        render={({ field: { onChange, value, ref, ...fieldProps } }) => (
          <Select
            selectedValue={value}
            onValueChange={onChange}
            {...fieldProps}
            {...rest}
          >
            {options.map((props, index) => (
              <Select.Item key={props.value} {...props} />
            ))}
          </Select>
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
