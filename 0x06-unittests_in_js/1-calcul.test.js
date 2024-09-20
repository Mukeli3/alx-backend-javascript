const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 7 when inputs are 4.7 and 2.3', function() {
      assert.strictEqual(calculateNumber('SUM', 4.7, 2.3), 7);
    });
    it('should return 6 when inputs are 1.5 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should return 5 when inputs are 1 and 4.3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 4.3), 5);
    });
    it('should return 4 when inputs are 1 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
  })
  describe('SUBTRACT', function() {
    it('should return 3 when inputs are 8 and 5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 8, 5), 3);
    });
    it('should return 3 when inputs are 4.7 and 2.3', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 2.3), 3);
    });
    it('should return 3 when inputs are 1 and 4.3', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.3, 1), 3);
    });
    it('should return 3 when inputs are 8 and -5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, 8), -13);
    });
    it('should return -3 when inputs are -8 and 5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, -8), 13);
    });
  });
  describe('DIVIDE', function() {
    it('should return 3 when inputs are 6 and 2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });
    it('should return 3 when inputs are 5.7 and 2.3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 2.3), 3);
    });
    it('should return 3 when inputs are 1 and 3.3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 3.3, 1), 3);
    });
    it('should return 3 when inputs are -12 and -4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -12, -4), 3);
    });
    it('should return -3 when inputs are -9 and 3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
    });
    it("should return Error when inputs are 1 and 0", function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });
});
