import checkFile from "check-ecmascript-version-compatibility";
import ensure from "./ensure.es6.js";

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

    checkFile('./src/ensure/ensure.es6.js', 2015, callback)
  });
});

describe('basic check', () => {
  test('should return default value', () => {
    expect(ensure("true", true, false)).toBe(true);
  });

  test('should return given', () => {
    expect(ensure("en", "tr", "en", "de")).toBe("en");
  });
});