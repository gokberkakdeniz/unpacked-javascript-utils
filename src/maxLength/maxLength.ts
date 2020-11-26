import { Measurable, FormValidatorGenerator } from "../validator-types";

const maxLength: FormValidatorGenerator<Measurable, [number]> = (length) => (
  value,
) =>
  value && value?.length <= length
    ? undefined
    : { message: "validators.maxLength", params: { length } };

export default maxLength;
