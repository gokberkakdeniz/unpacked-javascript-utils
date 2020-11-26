import { FormValidator } from "../validator-types";

const number: FormValidator<unknown> = (value) =>
  Number.isNaN(value) ? "validators.number" : undefined;

export default number;
