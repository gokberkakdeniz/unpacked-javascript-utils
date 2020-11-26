import { FormValidator } from "../validator-types";

const required: FormValidator<unknown> = (value) =>
  value !== undefined ? undefined : "validators.required";

export default required;
