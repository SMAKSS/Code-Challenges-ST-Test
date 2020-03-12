import { romanNumDecoder } from './';
import { assert } from 'chai';

describe("RomanNumeralsDecoder", function() {
  it('tests', () => {
    assert.equal(romanNumDecoder('XXI'), 21);
    assert.equal(romanNumDecoder('I'), 1);
    assert.equal(romanNumDecoder('IV'), 4);
    assert.equal(romanNumDecoder('MMVIII'), 2008);
    assert.equal(romanNumDecoder('MDCLXVI'), 1666);
  });
});