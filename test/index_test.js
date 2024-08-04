const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns factorial', () => {
      //Setup - Define expected output
      const expected = 24;
      const calculate = Calculate;

      //Exercise - Call the method under test
      const actual = Calculate.factorial(4);

      //Verify - Verify the expected output matches the actual output
      assert.equal(actual, expected);

      //Teardown - Delete the method under test
      //delete Calculate.factorial;
    });

    it('returns 1 as factorial if input was 0', () => {
      //Setup - Define expected output
      const expected = 1;
      const calculate = Calculate;

      //Exercise - Call the method under test
      const actual = Calculate.factorial(0);

      //Verify - Verify the expected output matches the actual output
      assert.equal(actual, expected);

      //Teardown - Delete the method under test
      //delete Calculate.factorial;
    });
  });
});