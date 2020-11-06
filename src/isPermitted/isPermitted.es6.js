/**
 * Returns true if role in permittedRoles, otherwise false.
 * 
 * @param {*} role role to be checked
 * @param {...any} permittedRoles permitted roles
 */
const isPermitted = (role, ...permittedRoles) => {
  return permittedRoles[0] === undefined || permittedRoles.flat(Infinity).includes(role);
};

export default isPermitted;
