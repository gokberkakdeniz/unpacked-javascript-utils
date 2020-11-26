import { FormValidator } from "../validator-types";

export const composeValidators = <T>(
  ...validators: FormValidator<T>[]
): FormValidator<T> => (value: T): ReturnType<FormValidator<T>> =>
  validators.reduce(
    (error: ReturnType<FormValidator<T>>, validator: FormValidator<T>) =>
      error || validator(value),
    undefined,
  );