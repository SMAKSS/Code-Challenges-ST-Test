import { ValidityCheck } from './';
import { assert } from 'chai';

function test(str, expected) { 
  var actual = ValidityCheck.validBraces(str);
  assert.strictEqual(actual, expected, `Expected ${str} to evaluate to be ${expected}. Got ${actual}`) 
}
function expect_valid(str) { test(str, true) }
function expect_invalid(str) { test(str, false) }

describe("solution", function(){
  it("should handle basic tests", function() {
      expect_valid( "()" )
      expect_valid( "(){}[]" )
      expect_valid( "([{}])" )
      expect_invalid( "(}" )
      expect_invalid( "[(])" )
      expect_invalid( "[({})](]" )
  });
});