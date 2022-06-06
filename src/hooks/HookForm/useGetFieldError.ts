import { useMemo } from "react";

interface UseGetFieldErrorProps {
  name: string;
  errors: Record<string, unknown>;
}

export function useGetFieldError({
  name,
  errors
}: UseGetFieldErrorProps) {
  const error = useMemo(() => {
    if (!errors) return undefined

    const keys = name.split('.')

    let err: any = errors

    for (const key of keys) {
      if (!err[key]) {
        err = undefined
        break
      }

      err = err[key]
    }

    return err
  }, [errors, name])

  const hasError = !!error

  return { error, hasError }
}
