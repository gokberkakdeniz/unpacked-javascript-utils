// Source: https://stackoverflow.com/a/37511463

/**
 * Removes accents and diacritics from text
 * 
 * @param {string} text text to be cleaned from accents and diacritics
 */
const deburr = (text) =>
  text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

export default deburr;