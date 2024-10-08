const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 7 when inputs are 4.7 and 2.3', function() {
    assert.strictEqual(calculateNumber(4.7, 2.3), 7);
  });
  it('should return 5 when inputs are 1.3 and 4', function() {
    assert.strictEqual(calculateNumber(1.3, 4), 5);
  });
  it('should return 5 when inputs are 1 and 4.3', function() {
    assert.strictEqual(calculateNumber(1, 4.3), 5);
  });
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
