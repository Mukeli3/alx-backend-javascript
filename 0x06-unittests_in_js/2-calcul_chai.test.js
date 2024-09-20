(async () => {
  const { expect } = await import('chai');
  const calculateNumber = (await import('./2-calcul_chai.js')).default;
  describe('calculateNumber', () => {
    describe('sUM', () => {
    it('should return 7 when inputs are 4.7 and 2.3', () => {
      expect(calculateNumber('SUM', 4.7, 2.3)).to.equal(7);
    });
    it('should return 6 when inputs are 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('should return 5 when inputs are 1 and 4.3', () => {
      expect(calculateNumber('SUM', 1, 4.3)).to.equal(5);
    });
    it('should return 4 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3),).to.equal(4);
    });
  });
  describe('sUBTRACT', () => {
    it('should return 3 when inputs are 8 and 5', () => {
      expect(calculateNumber('SUBTRACT', 8, 5)).to.equal(3);
    });
    it('should return 3 when inputs are 4.7 and 2.3', () => {
      expect(calculateNumber('SUBTRACT', 4.7, 2.3)).to.equal(3);
    });
    it('should return 3 when inputs are 1 and 4.3', () => {
      expect(calculateNumber('SUBTRACT', 4.3, 1)).to.equal(3);
    });
    it('should return 3 when inputs are 8 and -5', () => {
      expect(calculateNumber('SUBTRACT', -5, 8)).to.equal(-13);
    });
    it('should return -3 when inputs are -8 and 5', () => {
      expect(calculateNumber('SUBTRACT', 5, -8)).to.equal(13);
    });
  });
  describe('dIVIDE', () => {
    it('should return 3 when inputs are 6 and 2', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });
    it('should return 3 when inputs are 5.7 and 2.3', () => {
      expect(calculateNumber('DIVIDE', 5.7, 2.3)).to.equal(3);
    });
    it('should return 3 when inputs are 1 and 3.3', () => {
      expect(calculateNumber('DIVIDE', 3.3, 1)).to.equal(3);
    });
    it('should return 3 when inputs are -12 and -4', () => {
      expect(calculateNumber('DIVIDE', -12, -4)).to.equal(3);
    });
    it('should return -3 when inputs are -9 and 3', () => {
      expect(calculateNumber('DIVIDE', -9, 3)).to.equal(-3);
    });
    it('should return Error when inputs are 1 and 0', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
  });
});
})();
