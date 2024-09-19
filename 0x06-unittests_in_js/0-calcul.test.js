const assert = require('assert');
const calculateNumber = require('./0.calcul');

describe('calculateNumber', function() {
  it('should return 7 when inputs are 4.7 and 2.3', function() {
    assert.strictEqual(calculateNumber(4.7, 2.3), 7);
  });
  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
