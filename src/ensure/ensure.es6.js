/**
 * Returns value if value in validValues, 
 * otherwise returns first element of validValues.
 * 
 * @param {any} value value to be checked
 * @param  {...any} validValues valid values
 */
const ensure = (value, ...validValues) =>
  validValues.includes(value) ? value : validValues[0];

export default ensure;