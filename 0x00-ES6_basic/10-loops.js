export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const value of array) {
    narray.push(appendString + value);
  }

  return narray;
}
