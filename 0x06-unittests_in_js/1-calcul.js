function calculateNumber(type, a, b) {
  rA = Math.round(a);
  rB = Math.round(b);

  if (type === 'SUM') {
    return rA + rB
  }

  if (type === 'SUBTRACT') {
    return rA - rB;
  }

  if (type === 'DIVIDE') {
    if (rB === 0) {
      return ("Error");
    }
    return rA / rB
  }
  throw new Error('Invalid type');
}

module.exports = calculateNumber;
