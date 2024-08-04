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
    });

    it('returns "No input given." if no input was given', () => {
      //Setup - Define expected output
      const expected = "No input given.";
      const calculate = Calculate;

      //Exercise - Call the method under test
      const actual = Calculate.factorial();

      //Verify - Verify the expected output matches the actual output
      assert.equal(actual, expected);

      //Teardown - Delete the method under test
    });

    it('returns "Invalid input type. Expected a number." if an object was given', () => {
      //Setup - Define expected output
      const expected = "Invalid input type. Expected a number.";
      const calculate = Calculate;
      const lol = () => {};

      //Exercise - Call the method under test
      const actual = Calculate.factorial(lol);

      //Verify - Verify the expected output matches the actual output
      assert.equal(actual, expected);

      //Teardown - Delete the method under test
    });

    it('returns "Invalid input type. Expected a number." if input was not an integer', () => {
      //Setup - Define expected output
      const expected = "Invalid input type. Expected a number.";
      const calculate = Calculate;

      //Exercise - Call the method under test
      const actual = Calculate.factorial("lol");

      //Verify - Verify the expected output matches the actual output
      assert.equal(actual, expected);

      //Teardown - Delete the method under test
    });
  });
});