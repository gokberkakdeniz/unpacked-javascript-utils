import isPermitted from "./isPermitted.es6.js"
import checkFile from "check-ecmascript-version-compatibility";

const Roles = {
  SYSTEM_ADMIN: "SYSTEM_ADMIN",
  SUPERVISOR: "SUPERVISOR",
  SUPERVISOR_ADMIN: "SUPERVISOR_ADMIN",

  CITIZEN: "CITIZEN",
  ANONYMOUS: "ANONYMOUS",
  PERSONEL: "PERSONEL",

  UNAUTHORIZED: "UNAUTHORIZED",
};
Roles.WEB = [Roles.SUPERVISOR, Roles.SUPERVISOR_ADMIN, Roles.SYSTEM_ADMIN]
Roles.MOBILE = [Roles.CITIZEN, Roles.ANONYMOUS, Roles.PERSONEL]
Roles.ALL = [Roles.WEB, Roles.MOBILE]

describe('compability check', function () {
  it('es6 compliant', (done) => {
    function callback(data) {
      try {
        expect(data).toBe(undefined);
        done();
      } catch (error) {
        done(error);
      }
    }

    checkFile('./src/isPermitted/isPermitted.es6.js', 2015, callback)

  });
});

describe('basic check', () => {
  test('no roles given', () => {
    expect(isPermitted("normal")).toBe(true);
  });

  test('has permission', () => {
    expect(isPermitted("normal", "normal", "premium")).toBe(true);
  });

  test('has no permission', () => {
    expect(isPermitted("anonymous", "normal", "premium")).toBe(false);
  });
});

describe('advanced check', () => {
  test('no roles given', () => {
    expect(isPermitted("SUPERVISOR", Roles.ALL)).toBe(true);
  });

  test('has permission', () => {
    expect(isPermitted("SUPERVISOR", Roles.WEB)).toBe(true);
  });

  test('has no permission', () => {
    expect(isPermitted("UNAUTHORIZED", Roles.ALL, "UNAUTHORIZED")).toBe(true);
  });
});
