export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const res = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      res.push(value.slice(startString.length));
    }
  }
  return res.join('-');
}
