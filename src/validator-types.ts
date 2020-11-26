export type FormValidationError =
  | string
  | { message: string; params: Record<string, unknown> };

export type FormValidator<T> = (value: T) => FormValidationError | undefined;

export type FormValidatorGenerator<T, V extends unknown[]> = (
  ...args: V
) => FormValidator<T>;

export type Measurable = {
  length: number;
  [x: string]: unknown;
};
