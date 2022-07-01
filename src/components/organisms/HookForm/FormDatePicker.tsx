import React from 'react'
import DateTimePicker, { DatePickerOptions } from '@react-native-community/datetimepicker';

import { FormControl, Text, WarningOutlineIcon, Text } from 'native-base'
import { Controller, useFormContext } from 'react-hook-form';

import { useGetFieldError } from '../../../hooks/HookForm/useGetFieldError';

interface FormDatePickerProps extends Omit<DatePickerOptions, 'value' | 'onChange'> {
  label?: string;
  name: string;
  defaultValue?: any;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function FormDatePicker({
  label,
  name,
  defaultValue,
  helperText,
  required,
  disabled,
  readOnly,
  ...rest
}: FormDatePickerProps) {
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
          <DateTimePicker
            value={value}
            onChange={(_, date) => onChange(date)}
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
