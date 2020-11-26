import { Measurable, FormValidatorGenerator } from "../validator-types";

const minLength: FormValidatorGenerator<Measurable, [number]> = (length) => (
  value,
) =>
  value && value.length >= length
    ? undefined
    : { message: "validators.minLength", params: { length } };

export default minLength;
