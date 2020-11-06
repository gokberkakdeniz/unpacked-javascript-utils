/**
 * Returns previous path
 * 
 * @param {string} url url to be cut
 */
const urlBack = (url) => {
  const protocol = url.lastIndexOf("//") + 1;
  const lastIndex = url.lastIndexOf("/");

  return protocol === lastIndex ? url : url.substring(0, lastIndex);
}

export default urlBack;