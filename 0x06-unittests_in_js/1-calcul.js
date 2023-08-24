function calculateNumber (type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  let result = null;
  if (type === 'SUM') {
    result = roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    result = roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    } else {
      result = roundedA / roundedB;
    }
  }
  return result;
}

module.exports = calculateNumber;
