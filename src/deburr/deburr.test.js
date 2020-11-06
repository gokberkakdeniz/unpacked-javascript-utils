import checkFile from "check-ecmascript-version-compatibility";
import deburr from "./deburr.es6.js";

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

    checkFile('./src/deburr/deburr.es6.js', 2015, callback)
  });
});

describe('basic check', () => {
  test('turkish', () => {
    expect(deburr("Pijamalı hasta yağız şoföre çabucak güvendi.")).toBe("Pijamalı hasta yagız sofore cabucak guvendi.");
  });

  test('german', () => {
    expect(deburr("Zwölf Boxkämpfer jagen Viktor quer über den grossen Sylter Deich")).toBe("Zwolf Boxkampfer jagen Viktor quer uber den grossen Sylter Deich");
  });
});