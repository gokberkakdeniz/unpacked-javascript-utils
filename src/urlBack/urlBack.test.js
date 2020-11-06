import urlBack from "./urlBack.es6.js"
import checkFile from "check-ecmascript-version-compatibility";
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

    checkFile('./src/urlBack/urlBack.es6.js', 2015, callback)
  });
});

describe('basic check', () => {
  test('should go back', () => {
    expect(urlBack("https://en.wikipedia.org/wiki/ECMAScript")).toBe("https://en.wikipedia.org/wiki");
  });

  test('should go back (trailing slash)', () => {
    expect(urlBack("https://en.wikipedia.org/")).toBe("https://en.wikipedia.org");
  });

  test('no previous path', () => {
    expect(urlBack("https://en.wikipedia.org")).toBe("https://en.wikipedia.org");
  });
});