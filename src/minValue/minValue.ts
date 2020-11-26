import { FormValidatorGenerator } from "../validator-types";

const minValue: FormValidatorGenerator<number, [number]> = (min) => (value) =>
  Number.isNaN(value) || value >= min
    ? undefined
    : { message: "validators.minValue", params: { min } };

export default minValue;
